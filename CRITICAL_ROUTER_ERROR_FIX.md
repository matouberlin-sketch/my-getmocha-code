# 🚨 CRITICAL: React Router Error Fix

## Current Status: ACTIVE ISSUE
**Error:** `useNavigate() may be used only in the context of a <Router> component.`
**Impact:** Application crashes with error boundary
**Priority:** P0 - Critical

## Immediate Diagnosis Steps

### 1. Check Browser Console
Run these commands in browser dev tools:
```javascript
// Check if Router is mounted
document.querySelector('[data-router-mounted]') !== null

// Check for navigation components outside router
document.querySelectorAll('nav, [class*="nav"]').length

// Check React component tree
console.log(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner)
```

### 2. Verify App.tsx Structure
Current required structure:
```tsx
// ✅ CORRECT - This MUST be the structure
export default function App() {
  return (
    <AppErrorBoundary>
      <Router>
        <Navigation /> {/* Direct import, not lazy */}
        <main>
          <Suspense>
            <Routes>...</Routes>
          </Suspense>
        </main>
      </Router>
    </AppErrorBoundary>
  );
}
```

### 3. Component Import Rules
- ✅ DIRECT IMPORT: Navigation (uses useLocation)
- ✅ LAZY IMPORT: All page components (Dashboard, Planner, etc.)
- 🚨 NEVER LAZY: Any component using router hooks

## Emergency Recovery Protocol

### Step 1: Immediate Fix
1. Open `/src/react-app/App.tsx`
2. Ensure Navigation import is NOT lazy:
   ```tsx
   // ✅ CORRECT
   import Navigation from './components/Navigation';
   
   // ❌ WRONG - This causes the error
   const Navigation = lazy(() => import('./components/Navigation'));
   ```

### Step 2: Component Verification
Check these files for router hook usage:
- `Navigation.tsx` - Uses `useLocation()` ✅ Direct import required
- `*Detail.tsx` - Uses `useParams()` ✅ Should be lazy (page level)
- `*Edit.tsx` - Uses `useNavigate()` ✅ Should be lazy (page level)

### Step 3: Testing Protocol
```bash
# 1. Clear all caches
npm run build
rm -rf dist/ .cache/

# 2. Restart dev server
npm run dev

# 3. Test navigation
curl http://localhost:5173/
```

## Root Cause Analysis

### Why This Happens
1. **Lazy Loading Timing**: Lazy components load asynchronously
2. **Router Context**: Router must be mounted before hooks are called
3. **Component Hierarchy**: Navigation renders before Router is ready

### Detection Patterns
```javascript
// This error pattern indicates the issue:
Error: useNavigate() may be used only in the context of a <Router> component
  at useNavigate (react-router-dom.js:123)
  at Navigation (Navigation.tsx:42)
  at Suspense
  at div
  at App (App.tsx:67)
```

## Prevention Checklist

- [ ] Navigation component is directly imported (not lazy)
- [ ] Router wraps all components using router hooks
- [ ] Error boundary provides clear error messages
- [ ] Console logging shows router errors clearly
- [ ] Recovery instructions are user-friendly

## Files to Monitor

### Critical Files (Changes require review)
- `src/react-app/App.tsx` - Router setup
- `src/react-app/components/Navigation.tsx` - Router hooks usage

### Watch for Router Hook Usage
```bash
# Find all router hook usage
grep -r "use\(Navigate\|Location\|Params\)" src/react-app/
```

## Success Verification

When fixed, you should see:
1. ✅ App loads without error boundary
2. ✅ Navigation works on all pages
3. ✅ Console shows no router errors
4. ✅ Error boundary shows helpful messages (not triggered)

---

**Last Updated:** 2025-09-19  
**Status:** Monitoring for resolution  
**Next Review:** Immediate after any App.tsx changes
