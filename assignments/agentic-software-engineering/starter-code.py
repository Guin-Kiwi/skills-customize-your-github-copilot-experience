# Starter code for the Agentic Software Engineering assignment

from dataclasses import dataclass


@dataclass
class TimerState:
    total_seconds: int
    remaining_seconds: int
    is_running: bool = False


class CountdownTimer:
    def __init__(self, seconds: int) -> None:
        if seconds < 0:
            raise ValueError("seconds must be >= 0")
        self.state = TimerState(total_seconds=seconds, remaining_seconds=seconds)

    def start(self) -> None:
        # TODO: Consider guarding against start() when timer already ended
        self.state.is_running = True

    def pause(self) -> None:
        self.state.is_running = False

    def tick(self) -> None:
        if self.state.is_running and self.state.remaining_seconds > 0:
            self.state.remaining_seconds -= 1

    # TODO: Add reset() to restore remaining_seconds to total_seconds
    # TODO: Add helper method format_time() -> "MM:SS"


class PomodoroTimer:
    def __init__(self, work_minutes: int = 25, break_minutes: int = 5) -> None:
        if work_minutes <= 0 or break_minutes <= 0:
            raise ValueError("work and break durations must be > 0")
        self.work_minutes = work_minutes
        self.break_minutes = break_minutes
        self.current_phase = "work"

    def next_phase(self) -> str:
        # TODO: Extend with cycle counting
        self.current_phase = "break" if self.current_phase == "work" else "work"
        return self.current_phase


# TODO: Add a small CLI loop or UI adapter to interact with both timers
# TODO: Create tests for input validation, tick behavior, phase switching, and edge cases


if __name__ == "__main__":
    print("Agentic Timer App starter loaded.")
