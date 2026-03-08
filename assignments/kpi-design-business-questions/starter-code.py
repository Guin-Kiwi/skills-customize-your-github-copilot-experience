"""Starter code for KPI Design and Business Questions.

Build at least one KPI calculator from tabular records.
"""


def conversion_rate(total_visits, total_conversions):
    """Return conversion rate as float from 0 to 1."""
    if total_visits <= 0:
        return 0.0
    return total_conversions / total_visits


if __name__ == "__main__":
    print(conversion_rate(1200, 96))
