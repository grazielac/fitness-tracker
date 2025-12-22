export type Workout = {
    id: string;
    date: string;
    exercise: string;
    sets: number;
    reps: number;
    weight: number;
    notes?: string;
};

export const fakeWorkouts: Workout[] = [
    {
    id: '1',
    date: '2025-12-20',
    exercise: 'RDL',
    sets: 3,
    reps: 12,
    weight: 40,
    notes: 'Felt heavy on last set'
    },
    {
    id: '2',
    date: '2025-12-21',
    exercise: 'Hip Thrust',
    sets: 3,
    reps: 12,
    weight: 40,
    notes: 'Good form'
    },
    {
    id: '2',
    date: '2025-12-22',
    exercise: 'Deadlift',
    sets: 3,
    reps: 12,
    weight: 40,
    notes: 'Too light'
    }
]