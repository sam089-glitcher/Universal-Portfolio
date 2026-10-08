# Workspace Rule: CodeRabbit Review & Quality Gate Protocol

## Purpose
Rigorous automated code review and quality gate protocol ensuring enterprise-grade software standards, accessibility compliance, performance optimization, and bug prevention.

## Principles
1. **Multi-Vector Inspection:** Review every diff across:
   - **Correctness & Edge Cases:** Null checks, boundary conditions, empty collections.
   - **Accessibility (a11y):** Semantic HTML, ARIA attributes, keyboard navigation, focus management, minimum click target sizes (44x44px), WCAG contrast.
   - **Performance:** Image loading attributes (`priority`, `sizes`), unnecessary re-renders, bundle size, CSS layout thrashing.
   - **Type Safety & Code Smells:** Strict TypeScript typing, no dead code, adherence to existing design system tokens.
2. **Actionable Feedback:** Categorize findings by severity (Critical, Major, Minor, Nitpick) with concrete code snippets.
3. **Pre-Commit Quality Gate:** All code must pass review standards before being committed and pushed.
