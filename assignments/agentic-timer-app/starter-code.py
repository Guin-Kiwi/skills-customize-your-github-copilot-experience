"""Starter code for the Agentic Timer App assignment.

Student guidance:
1. Implement countdown and pomodoro behavior.
2. Add extra features from your requirements (for example: reset, alerts, history).
3. Write tests for each requirement ID (target at least 10 unit tests).
"""

from dataclasses import dataclass


@dataclass
class TimerState:
    # Hint: Keep timer state in one object so it is easy to test.
    total_seconds: int
    remaining_seconds: int
    is_running: bool = False


class CountdownTimer:
    def __init__(self, seconds: int) -> None:
        # Hint: Validate inputs early to avoid hidden bugs later.
        if seconds < 0:
            raise ValueError("seconds must be >= 0")
        self.state = TimerState(total_seconds=seconds, remaining_seconds=seconds)

    def start(self) -> None:
        # TODO: Consider guarding against start() when timer already ended.
        self.state.is_running = True

    def pause(self) -> None:
        self.state.is_running = False

    def tick(self) -> None:
        # Hint: This method should be deterministic for easy unit testing.
        if self.state.is_running and self.state.remaining_seconds > 0:
            self.state.remaining_seconds -= 1

    # TODO: Add reset() to restore remaining_seconds to total_seconds.
    # TODO: Add helper method format_time() -> "MM:SS".


class PomodoroTimer:
    def __init__(self, work_minutes: int = 25, break_minutes: int = 5) -> None:
        # Hint: Keep work and break durations configurable for custom sessions.
        if work_minutes <= 0 or break_minutes <= 0:
            raise ValueError("work and break durations must be > 0")
        self.work_minutes = work_minutes
        self.break_minutes = break_minutes
        self.current_phase = "work"

    def next_phase(self) -> str:
        # TODO: Extend with cycle counting (for example, long break every 4 cycles).
        self.current_phase = "break" if self.current_phase == "work" else "work"
        return self.current_phase


# TODO: Add a small CLI loop or UI adapter to interact with both timers.
# TODO: Create tests for input validation, tick behavior, phase switching, and edge cases.


if __name__ == "__main__":
    print("Agentic Timer App starter loaded.")
