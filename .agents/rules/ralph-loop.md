# Workspace Rule: Ralph Loop Protocol

## Purpose
Autonomous persistent iteration loop designed to drive tasks to completion through durable state validation.

## Principles
1. **Goal-Driven Autonomy:** Maintain the high-level objective until fully completed without requiring manual re-prompting for intermediate steps.
2. **Durable State Anchoring:** Never rely solely on conversation memory. Verify the real system state directly via filesystem, git tree, compiler checks (`next build`), and runtime logs.
3. **Self-Correction Loop:** When an error or inconsistency is detected, diagnose the root cause, apply fixes, and re-verify iteratively until the exit criteria are satisfied.
4. **Completion Guarantee:** Do not terminate the loop until all functional, type, build, and quality gates pass cleanly.
