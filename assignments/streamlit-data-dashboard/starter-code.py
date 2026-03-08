# Starter code for the Streamlit Data Dashboard assignment

# TODO: import streamlit as st
# TODO: import pandas as pd
# TODO: import matplotlib.pyplot as plt


def validate_columns(df, required_columns):
    """Return list of missing required columns."""
    return [col for col in required_columns if col not in df.columns]


def apply_filters(df, category_col=None, selected_categories=None, value_col=None, min_value=None, max_value=None):
    """Return filtered DataFrame based on selected UI filters."""
    filtered = df.copy()

    if category_col and selected_categories:
        filtered = filtered[filtered[category_col].isin(selected_categories)]

    if value_col and min_value is not None:
        filtered = filtered[filtered[value_col] >= min_value]

    if value_col and max_value is not None:
        filtered = filtered[filtered[value_col] <= max_value]

    return filtered


def summarize_data(df):
    """Return a short text summary from filtered data."""
    if df.empty:
        return "No rows match current filters."
    return f"Rows: {len(df)}, Columns: {len(df.columns)}"


def build_dashboard():
    """Build Streamlit UI and interactions."""
    # TODO: Build UI components
    pass


def main() -> None:
    build_dashboard()


if __name__ == "__main__":
    main()
