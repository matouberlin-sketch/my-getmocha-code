# React Router Safety Guide for KitchenFlow

## Quick Reference: Do NOT Lazy Load These Components

### ❌ NEVER LAZY LOAD - Components Using Router Hooks
- `Navigation.tsx` - uses `useLocation()`
- Any component using `useNavigate()`, `useParams()`, `useLocation()`
- Layout components with navigation logic
- Components that need immediate router access

### ✅ SAFE TO LAZY LOAD - Page Components
- `Dashboard.tsx`
- `Planner.tsx` 
- `Locations.tsx`
- `ERPImport.tsx`
- All page-level components that don't use router hooks in their top-level

## Code Patterns

### ✅ CORRECT: Direct Import for Router Hook Components
```typescript
import Navigation from './components/Navigation'; // Direct import

export default function App() {
  return (
    <Router>
      <Navigation /> // ✅ Always inside Router context
      <Routes>...</Routes>
    </Router>
  );
}
```

### ❌ WRONG: Lazy Loading Router Hook Components
```typescript
const Navigation = lazy(() => import('./components/Navigation')); // ❌ NEVER DO THIS

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navigation /> // ❌ May load outside Router context
      </Suspense>
    </Router>
  );
}
```

## Development Checklist

### Before Adding New Components
- [ ] Does the component use any React Router hooks?
  - `useNavigate()`
  - `useLocation()`
  - `useParams()`
  - `useSearchParams()`
  - `useMatches()`
- [ ] If YES: Import directly, never lazy load
- [ ] If NO: Safe to lazy load

### Before Modifying Routing
- [ ] Test all navigation links
- [ ] Check browser console for errors
- [ ] Verify error boundary shows helpful messages
- [ ] Test page reload functionality

### Code Review Checklist
- [ ] No Router hook components are lazy-loaded
- [ ] All Router hooks are used inside `<Router>` context
- [ ] Error boundaries provide clear messages
- [ ] Navigation works in all scenarios

## Emergency Recovery Steps

If you see "useNavigate() may be used only in the context of a Router component":

1. **Immediate Fix:**
   - Check which component is causing the error (look in browser console)
   - Find the component in App.tsx
   - If it's lazy-loaded, change to direct import
   - Move the component inside the `<Router>` wrapper

2. **Verify Fix:**
   - Reload the page
   - Test all navigation
   - Check console for other errors

3. **Document:**
   - Add comments to prevent future mistakes
   - Update this guide if needed

## File Structure Rules

```
src/react-app/
├── App.tsx                    // Router setup + direct imports for nav
├── components/
│   ├── Navigation.tsx         // ❌ NEVER lazy load (uses useLocation)
│   └── OtherComponents.tsx    // ✅ Safe to lazy load if no router hooks
└── pages/
    ├── Dashboard.tsx          // ✅ Safe to lazy load
    ├── Planner.tsx           // ✅ Safe to lazy load  
    └── ...                   // ✅ Page components usually safe
```

## Testing Commands

```bash
# Test the app locally
npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Check for build errors
npm run build
```

## Common Mistakes to Avoid

1. **Lazy Loading Navigation**: Never lazy load the main navigation
2. **Hook Outside Router**: Using router hooks in components outside Router context
3. **Silent Failures**: Not having proper error boundaries
4. **Missing Context**: Forgetting to wrap components in Router

## Success Indicators

✅ Navigation works on all pages  
✅ No console errors about React Router  
✅ Error boundary shows helpful messages (not black screen)  
✅ All pages load correctly  
✅ Browser back/forward works  

---

**Remember:** When in doubt, directly import components that use Router hooks!
