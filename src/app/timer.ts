export class Timer {

    minutes!: number;
    seconds!: number;
    timeLeftColor: string;
    buttonLabel: string;
    isPaused: boolean;

    constructor() {
        this.buttonLabel = 'Start';
        this.isPaused = true;
        this.reset();
        this.timeLeftColor = 'haveTime';
        setInterval(() => this.tick(), 1000);
    }
    reset(): void {
        this.minutes = 2;
        this.seconds = 59;
    }

    tick(): void {
        setInterval(() => this.timeLeft(), 1000);
        if (!this.isPaused) {
            this.buttonLabel = 'Pause';
            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.reset();
                }
            }
        }
    }
    timeLeft(): void {
        if (this.minutes >= 2) {
            this.timeLeftColor = 'haveTime';
            return;
        }
        if (this.minutes < 2 && this.minutes >= 1) {
            this.timeLeftColor = 'lessTime';
            return;
        }
        this.timeLeftColor = 'noTime';
    }
}
