# Portal Validation Workflows

This directory contains automated validation workflows for the educational portal.

## Phase 1: Foundation Tier (Active)

### 🚀 Portal Onboarding (`portal-onboarding.yml`)
**Trigger**: Student comments `/@setup-portal` on any issue
**Purpose**: Initialize student profile and provide setup guidance
**Actions**:
- Creates `.github/STUDENT_PROFILE.md` with repo context
- Posts setup checklist (enable Pages, visit URL, run validation)
**Usage**: One-time setup when student first forks

### ✅ Foundation Validation (`validate-foundation.yml`)
**Trigger**: Student comments `/@validate assignments/<id>` on any issue
**Purpose**: Validate Foundation tier assignments
**Supported assignments**:
- python-basics
- string-validation-and-data-quality
- lists-and-tuples
- dictionaries-and-sets
- files-and-exceptions
- python-classes

**Checks**:
- ✓ Code artifact: `starter-code.py` exists and has valid Python syntax
- ✓ Tests: Optional - runs pytest if `test_*.py` files exist (non-blocking)
- 💭 Reflection: Posts 3 optional questions for student to reflect on learning

**Example validation**: