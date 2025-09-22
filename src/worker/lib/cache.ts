import { type EnvironmentBindings } from "../types";

const DEFAULT_CACHE_TTL = 30;

export function resolveCacheTtl(env: Pick<EnvironmentBindings, "KITCHENFLOW_CACHE_TTL_SECONDS">): number {
  const value = env.KITCHENFLOW_CACHE_TTL_SECONDS;
  const parsed = value ? Number.parseInt(value, 10) : DEFAULT_CACHE_TTL;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_CACHE_TTL;
}

export type CacheKey = string;

export class MemoryCache<TValue> {
  private store = new Map<CacheKey, { expiresAt: number; value: TValue }>();

  constructor(private readonly ttlSeconds: number = DEFAULT_CACHE_TTL) {}

  get(key: CacheKey): TValue | null {
    const entry = this.store.get(key);
    if (!entry) {
      return null;
    }
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.value;
  }

  set(key: CacheKey, value: TValue, ttlSeconds = this.ttlSeconds): void {
    const expiresAt = Date.now() + ttlSeconds * 1000;
    this.store.set(key, { value, expiresAt });
  }

  delete(key: CacheKey): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }
}
