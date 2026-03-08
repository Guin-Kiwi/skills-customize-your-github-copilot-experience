# Starter code for Statistics and Hypothesis Testing


def mean(values):
    if not values:
        return 0.0
    return sum(values) / len(values)


def difference_of_means(group_a, group_b):
    return mean(group_a) - mean(group_b)


if __name__ == "__main__":
    a = [10, 12, 9, 11]
    b = [8, 9, 7, 8]
    print(difference_of_means(a, b))
