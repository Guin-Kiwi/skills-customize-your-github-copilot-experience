"""Starter code for Data Storytelling Memo.

Use these helpers to structure evidence summaries.
"""


def summarize_findings(findings):
    """Return top findings as bullet strings."""
    return [f"- {item}" for item in findings[:3]]


if __name__ == "__main__":
    sample = [
        "Conversion rate increased 2.1% week-over-week.",
        "Retention improved most in segment B.",
        "Experiment variant C underperformed in high-cost channels.",
    ]
    print("\n".join(summarize_findings(sample)))
