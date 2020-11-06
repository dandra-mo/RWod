import _shuffle from "lodash.shuffle";

const workouts = [
    {
        power: {
            movement: 'Hang Power Snatch',
            repScheme: '6x3'
        },
        strength: {
            movement: 'Pause Bench Press',
            repScheme: '4x3 (2-3sec FULL pause at bottom)'
        },
        superSet: {
            movement1: 'Front-foot Elevated Reverse Lunges',
            repScheme1: '3x8 each leg - moderate weight',
            movement2: 'SA (single Arm) DB inlcine press',
            repScheme2: '3x6 each - moderate weight'
        },
        metcon: {
            movement: 'Power Snatch - Burbees Over Bar',
            repScheme: '21-15-9',
            weight: '105/65 OR moderatly light'
        },
        finisher: {
            movement: 'max-time hollow bar hangs'
        }
    },
    {
        power: {
            movement: 'Hang Power Squat Cleans',
            repScheme: '6x3'
        },
        strength: {
            movement: 'KB Push Press',
            repScheme: '4x6 - moderately heavy weight'
        },
        superSet: {
            movement1: 'Front-rack Walking Lunges',
            repScheme1: '3x12 steps - moderate weight',
            movement2: 'DB Box Shoulders',
            repScheme2: '3x10 - moderately light weight'
        },
        metcon: {
            movement: '8 Front Squats - 10 cal row -  6 TTB (toes to bar)',
            repScheme: '4min AMRAP - rest 4min - 5min AMRAP - rest 3min - 6min AMRAP',
            weight: '95/55'
        },
        finisher: {
            movement: '100 ab-mat sit-ups - 5min cap - 5 Vups every 10 reps'
        },
    },
    {
        power: {
            movement: 'Clean and Jerks',
            repScheme: '4x2'
        },
        strength: {
            movement: 'Front Squats',
            repScheme: '4x4 - HEAVY'
        },
        superSet: {
            movement1: 'Pull-ups',
            repScheme1: '3x12 OR 3x8 w/weight',
            movement2: 'Good Mornings',
            repScheme2: '3x12'
        },
        metcon: {
            movement: '60 GTOH - 60 C2B Pull-ups - 60 Burpees',
            repScheme: 'Chipper - complete all reps before going to next movement',
            weight: '95/55'
        },
        finisher: {
            movement: 'accumulate 1000m farmers carry'
        }
    },
    {
        power: {
            movement: 'Speed Deadlifts',
            repScheme: '8x3 EMOM'
        },
    strength: {
            movement: 'Back Squats',
            repScheme: '4x6'
        },
    superSet: {
            movement1: 'GHR (glute hame raises)',
            repScheme1: '3x8',
            movement2: 'BB/KB/DB row',
            repScheme2: '3x12'
        },
    metcon: {
            movement: 'Ascending Deadlifts - 6 TTB',
            repScheme: '10rds - reps = round (rd1 = 1 rep, rd2 = 2 reps...) - 6 TTB each round',
            weight: 'start @ 55% (DL weight increases every round)'
        },
    finisher: {
            movement: '3-5 rds - 8 weighted deadbugs, 8 weighted toe touches, 8 weighted vups'
        }
    },
    {
        power: {
            movement: 'Front-Squat',
            repScheme: '10x3 EMOM'
        },
        strength: {
            movement: 'Push Press',
            repScheme: '4x6ea'
        },
        superSet: {
            movement1: '1/2 Kneeling landmind press',
            repScheme1: '3x12ea',
            movement2: 'Step-ups',
            repScheme2: '3x8ea'
        },
        metcon: {
            movement: '15 KB Thrusters - 30 DUs',
            repScheme: '20min AMRAP',
            weight: ''
        },
        finisher: {
            movement: 'accumulate 1000m farmers carry'
        }

    },
    {
        power: {
            movement: 'Push Jerks',
            repScheme: '3-3-2-2-1-1-1'
        },
        strength: {
            movement: 'Box Squat',
            repScheme: '4x5ea'
        },
        superSet: {
            movement1: 'Bar/ring dips',
            repScheme1: '3x6-8',
            movement2: 'Step-ups',
            repScheme2: '3x8ea'
        },
        metcon: {
            movement: '12 Handstand PUs - 10 Cal Assault Bike',
            repScheme: '5rds for time',
            weight: ''
        },
        finisher: {
            movement: 'accumulate 3-5min hollow holds'
        }
    },
    {
        power: {
            movement: 'Snatch-Grip Clean Pulls',
            repScheme: '5x3'
        },
        strength: {
            movement: 'Snatch Grip Deadlifts',
            repScheme: '4x6ea'
        },
        superSet: {
            movement1: '4 sec negative pull-ups',
            repScheme1: '3x6-8',
            movement2: 'Band pull-throughs',
            repScheme2: '3x15'
        },
        metcon: {
            movement: '8 Heavy KB Swings -  6 Burpess Box Jump Overs',
            repScheme: '12min AMRAP',
            weight: ''
        },
        finisher: {
            movement: 'Single Arm KB Holds - while standing, hold HEAVY KB in hand on 1 side for max time; switch side'
        }
    },
    {
        power: {
            movement: 'SA DB/KB Snatch',
            repScheme: '5x4ea'
        },
        strength: {
            movement: 'Deadlifts',
            repScheme: 'build to near max single'
        },
        superSet: {
            movement1: 'Bent over Row',
            repScheme1: '3x10',
            movement2: 'Reverse Lunges',
            repScheme2: '3x8ea'
        },
        metcon: {
            movement: '15 Double KB Snatch - 250m Row',
            repScheme: '10min ON/5min OFF - 25 Total Min',
            weight: ''
        },
        finisher: {
            movement: 'Hip thrusts 3-4 sets of 12-15'
        }
    },
    {
        power: {
            movement: 'Drop OH Squat',
            repScheme: '8x3'
        },
        strength: {
            movement: 'Bench Press',
            repScheme: '4x3 @ 85%'
        },
        superSet: {
            movement1: 'SL Toe Elevated RDL',
            repScheme1: '3x12ea',
            movement2: 'KB/DB Floor Press',
            repScheme2: '3x10'
        },
        metcon: {
            movement: 'OH Squats - Muscle Ups - Box Jumps',
            repScheme: '21-15-9',
            weight: '105/65'
        },
        finisher: {
            movement: '3rds - 100m heavy carries '
        }
    },
    {
        power: {
            movement: 'Clean Series (clean pull, hang clean, power clean = 1)',
            repScheme: '5x2 - Ascending E2OM'
        },
        strength: {
            movement: 'Speed Bench Press',
            repScheme: '8x3 EMOM'
        },
        superSet: {
            movement1: 'Deep Pushups',
            repScheme1: '3x12',
            movement2: 'Band Pull-aparts',
            repScheme2: '3x15'
        },
        metcon: {
            movement: '15 Hang Power Cleans - 9 Burpees Over Bar',
            repScheme: '6 rounds for time',
            weight: '115/85'
        },
        finisher: {
            movement: 'Accumulate 200 banded shrugs'
        },
    },
    {
        power: {
            movement: 'Plyo Pushups',
            repScheme: '5x12'
        },
        strength: {
            movement: 'Split Squat + Iso Holds',
            repScheme: '4x20 + :60'
        },
        superSet: {
            movement1: '3-Way Lunges',
            repScheme1: '3x8ea',
            movement2: 'Dips',
            repScheme2: '3x12'
        },
        metcon: {
            movement: '12 Med-ball pounds - 60 DUs',
            repScheme: '16min AMRAP',
            weight: ''
        },
        finisher: {
            movement: '15-12-9-12-15 Seated z-press/pull ups'
        }
    },
    {
        power: {
            movement: 'Push Press',
            repScheme: '5-5-4-4-3-2-1-1-1'
        },
        strength: {
            movement: 'Pause Front Squat',
            repScheme: '4x4'
        },
        superSet: {
            movement1: 'Standing Alt DB Press',
            repScheme1: '3x8ea',
            movement2: 'High Step-Ups',
            repScheme2: '3x6ea'
        },
        metcon: {
            movement: 'Devils Press - DB Box Step Overs',
            repScheme: '21-15-9',
            weight: '45/25'
        },
        finisher: {
            movement: '3rds - 10 Goblet squats/50ft double OH farmers walks'
        }
    },
    {
        power: {
            movement: 'Split Jerks',
            repScheme: '5-5-4-3-2-2-1-1-1'
        },
        strength: {
            movement: 'Band Deadlifts',
            repScheme: '5-4-3-3-2-1-1'
        },
        superSet: {
            movement1: 'Seated Goodmornings',
            repScheme1: '3x15',
            movement2: 'Box Jumps',
            repScheme2: '3x5'
        },
        metcon: {
            movement: '8 Heavy Deadlifts - 12 STOH - 15 Box Jumps',
            repScheme: '3 rounds for time',
            weight: ''
        },
        finisher: {
            movement: 'Ring Rows 4x20'
        }
    },
    {
        power: {
            movement: 'Power Cleans',
            repScheme: '5x3'
        },
        strength: {
            movement: 'Heavy Hip Thrusts',
            repScheme: '3x8'
        },
        superSet: {
            movement1: 'Bodyweight Cossak Squat',
            repScheme1: '3x8ea',
            movement2: 'Weighted Pull-ups',
            repScheme2: '3x6'
        },
        metcon: {
            movement: '8 KB Cleans - 12 TTB - 50ft HandStand Walks',
            repScheme: '5min AMRAP - 3min off - 5min AMRAP - 3min off - 5min AMRAP',
            weight: ''
        },
        finisher: {
            movement: '5rds 10 Back Extensions/10 RDLs'
        }
    },
    {
        power: {
            movement: 'Sled Drags - Heavy',
            repScheme: '4x 1000m'
        },
        strength: {
            movement: 'Sled Sprints',
            repScheme: '6x 50m'
        },
        superSet: {
            movement1: 'Runs',
            repScheme1: '2x 50m @ 50%',
            movement2: '2x 50m @75%',
            repScheme2: '4x 50m @ 100%'
        },
        metcon: {
            movement: '1x 100m @ 50%',
            repScheme: '1x 100m @ 75%',
            weight: '3x 100m @ 100%'
        },
        finisher: {
            movement: '4x 30 V-ups - 20 Toe Touches - 10 Hollow Rocks'
        }
    },
    {
        power: {
            movement: 'Med-Ball Cleans',
            repScheme: '6x 15'
        },
        strength: {
            movement: 'Zercher Squats',
            repScheme: '4x 12'
        },
        superSet: {
            movement1: 'Med-ball Burpees',
            repScheme1: '3x 15',
            movement2: 'Med-ball Sit-ups',
            repScheme2: '3x 20'
        },
        metcon: {
            movement: '1000m Row buy-in then... ',
            repScheme: '5rds of 60 Air Squats - 10 HSPUs',
            weight: ''
        },
        finisher: {
            movement: '3x 10ea 1/2 Kneeling Palloff Press - 40 Band Tri Pull-downs'
        }
    },
    {
        power: {
            movement: 'KB/DB Deadlifts',
            repScheme: '5x 12'
        },
        strength: {
            movement: 'Glute Ham Raises',
            repScheme: '4x 8'
        },
        superSet: {
            movement1: 'Strict Pull-ups',
            repScheme1: '4x 8',
            movement2: 'KB Swings',
            repScheme2: '4x 20'
        },
        metcon: {
            movement: '3 Rope Climbs - 100ft Farmers Carry',
            repScheme: '10rds',
            weight: ''
        },
        finisher: {
            movement: 'Accumulate 150 banded pull throughs'
        }
    },
    {
        power: {
            movement: 'Snatch',
            repScheme: '4-4-3-3-2-2-1-1-1'
        },
        strength: {
            movement: 'Front Rack Bulgarian Split Squats',
            repScheme: '4x 8ea'
        },
        superSet: {
            movement1: 'Monkey Slides',
            repScheme1: '4x 30ft',
            movement2: 'Banded Rows',
            repScheme2: '4x 20ea'
        },
        metcon: {
            movement: '5ea KB snatch - 10 KB Swings - 10 Bottoms up KB Goblet Squats',
            repScheme: '8-10rds',
            weight: 'same weight throughout'
        },
        finisher: {
            movement: 'Run 15 - 20min'
        }
    },
    {
        power: {
            movement: 'Jump Shrug + Clean Pull',
            repScheme: '4x 3 + 3'
        },
        strength: {
            movement: 'Front Squat',
            repScheme: '4x 8'
        },
        superSet: {
            movement1: 'Incline Press',
            repScheme1: '4x 8',
            movement2: 'SB Leg Curls',
            repScheme2: '3x 10'
        },
        metcon: {
            movement: 'Barbara',
            repScheme: '20 Pull-ups, 30 Push-ups, 40 Sit-ups, 50 Air-squats',
            weight: '5rds for time'
        },
        finisher: {
            movement: 'DB row ladder - 1x10,9,8...1'
        }
    },
    {
        power: {
            movement: 'KB/DB SA Swings',
            repScheme: '4x 4ea'
        },
        strength: {
            movement: 'DB Push Press',
            repScheme: '4x 6'
        },
        superSet: {
            movement1: 'Bulgarian Split Squat',
            repScheme1: '3x 8ea',
            movement2: 'Pullover + press',
            repScheme2: '3x 10'
        },
        metcon: {
            movement: 'Helen',
            repScheme: '400m run - 21 KB/DB swings - 12 Pull-ups',
            weight: '3rds for time'
        },
        finisher: {
            movement: '60 Elbows to Hands'
        }
    },
    {
        power: {
            movement: 'Box Squat',
            repScheme: '5x 6'
        },
        strength: {
            movement: 'DB Elevator (shoulder, incline, bench press - same weight)',
            repScheme: '3x 8'
        },
        superSet: {
            movement1: 'Step-up to Reverse lunge',
            repScheme1: '3x 6 + 6',
            movement2: 'Lat Pull-downs',
            repScheme2: '3x 8'
        },
        metcon: {
            movement: 'Karen',
            repScheme: '150 Wall-balls',
            weight: 'for time'
        },
        finisher: {
            movement: '150ft duck walk'
        }
    },
    {
        power: {
            movement: 'Clean Pulls',
            repScheme: '4x 4'
        },
        strength: {
            movement: 'Bottoms up Front Squat',
            repScheme: '3x 7'
        },
        superSet: {
            movement1: 'Band Pull-ups',
            repScheme1: '4x 12',
            movement2: 'Lateral lunge',
            repScheme2: '4x 6ea'
        },
        metcon: {
            movement: 'Grace',
            repScheme: '30 Clean and Jerks for time',
            weight: '135/95'
        },
        finisher: {
            movement: '15-12-9-12-15 Banded Lo-rows, Banded Face Pulls, Leg Thrusts'
        }
    },
    {
        power: {
            movement: 'Power Jerks',
            repScheme: '4-4-3-3-2-2-2'
        },
        strength: {
            movement: 'Deadlifts',
            repScheme: '5x 4'
        },
        superSet: {
            movement1: 'Biceps of Choice',
            repScheme1: '3x 10',
            movement2: 'Iso Hypers',
            repScheme2: '3x10 - 3sec pause every rep'
        },
        metcon: {
            movement: 'Diane',
            repScheme: '21-15-9 -- Deadlifts - HSPU',
            weight: '225/165'
        },
        finisher: {
            movement: '3rds - 8 Seated Z-press - 8 Eccentric Chin-ups'
        }
    },
    {
        power: {
            movement: 'KB/DB Deadlifts',
            repScheme: '5x 12'
        },
        strength: {
            movement: 'Glute Ham Raises',
            repScheme: '4x 8'
        },
        superSet: {
            movement1: 'Strict Pull-ups',
            repScheme1: '4x 8',
            movement2: 'KB Swings',
            repScheme2: '4x 20'
        },
        metcon: {
            movement: '3 Rope Climbs - 100ft Farmers Carry',
            repScheme: '10rds',
            weight: ''
        },
        finisher: {
            movement: 'Accumulate 150 banded pull throughs'
        }
    },
    {
        power: {
            movement: 'Tempo Bench Press',
            repScheme: '4x 3 (4sec neg, 1-2sec pause)'
        },
        strength: {
            movement: 'Seated Goodmornings',
            repScheme: '4x 12'
        },
        superSet: {
            movement1: 'Staggered RDLs - Heavy',
            repScheme1: '4x 6-8ea',
            movement2: 'Ring Dips',
            repScheme2: '4x 10'
        },
        metcon: {
            movement: 'Lynee',
            repScheme: 'Bodyweight Bench Press - Pull-ups',
            weight: '5rds for max reps'
        },
        finisher: {
            movement: '3rds 20 Reverse Planks - 8ea IR/ER Rotations'
        }
    },
    {
        power: {
            movement: 'Banded Back Squats',
            repScheme: '5x 3 EMOM'
        },
        strength: {
            movement: 'Back Squat Cluster',
            repScheme: '3x 5-3-1 (start each cluster every 12-15sec)'
        },
        superSet: {
            movement1: 'Chin-up + Neg Combo',
            repScheme1: '4x 8 + 4sec negative',
            movement2: 'Banded KB Swings',
            repScheme2: '4x 12'
        },
        metcon: {
            movement: 'Annie',
            repScheme: 'Double-Unders - Sit-ups',
            weight: '50-40-30-20-10 reps/rounds for time'
        },
        finisher: {
            movement: '5rds 20 Band Pull-Aparts - Max Time L-sit Holds'
        }
    },
    {
        power: {
            movement: 'Bench Press',
            repScheme: '4x 3'
        },
        strength: {
            movement: '1-leg DL (rear-foot elevated)',
            repScheme: '4x 4ea'
        },
        superSet: {
            movement1: '3 Position Band Lateral Step (straight leg, 1/4 squat, bent over)',
            repScheme1: '4x 10ea position',
            movement2: 'Standing Banded Elbow to Opp Knee',
            repScheme2: '4x 16ea side'
        },
        metcon: {
            movement: 'Annie',
            repScheme: 'Double-Unders - Sit-ups',
            weight: '50-40-30-20-10 reps/rounds for time'
        },
        finisher: {
            movement: 'Accumulate 200 dips'
        }
    },
    {
        power: {
            movement: 'Snatch Balance',
            repScheme: '4x 5'
        },
        strength: {
            movement: 'Pause Deadlifts',
            repScheme: '4x 5'
        },
        superSet: {
            movement1: '3 Position Medball Pounds (forward, side, side = 1)',
            repScheme1: '4x 8',
            movement2: 'SL Good Mornings',
            repScheme2: '4x 8ea'
        },
        metcon: {
            movement: 'Eva',
            repScheme: '800m Run - 30 KB Swings - 30 Pull-ups',
            weight: '5rds for time'
        },
        finisher: {
            movement: 'Accumulate 200 donkey kicks ea side'
        }
    },
    {
        power: {
            movement: 'Ring Pull-ups',
            repScheme: '4x 6'
        },
        strength: {
            movement: 'Weighted negative GHRs',
            repScheme: '4x 5'
        },
        superSet: {
            movement1: 'SA Row',
            repScheme1: '4x 8',
            movement2: 'DB Front Raise',
            repScheme2: '3x 10'
        },
        metcon: {
            movement: 'Nicole',
            repScheme: '400m Run - max rep Pull-ups',
            weight: '20min AMRAP'
        },
        finisher: {
            movement: '5rds 6 Reverse Hypers - 8 Biceps of choice'
        }
    },
    {
        power: {
            movement: 'Snatch Series (snatch pull - hang snatch - power snatch = 1)',
            repScheme: '6x 1 - ascending weight'
        },
        strength: {
            movement: 'Incline Press',
            repScheme: '15-12-9-12-15'
        },
        superSet: {
            movement1: 'DB/KB Snatch to Rev Lunge',
            repScheme1: '3x 6ea',
            movement2: 'Floor Press',
            repScheme2: '4x 8'
        },
        metcon: {
            movement: 'Chelsea',
            repScheme: '5 Pull-ups - 10 Push-ups - 15 Air Squats',
            weight: 'Each on the minute for 30min'
        },
        finisher: {
            movement: '3x20 Movement of choice'
        }
    },
    {
        power: {
            movement: 'SA KB Complex (Russian Swing, American Swing, Snatch = 1)',
            repScheme: '4x 6ea'
        },
        strength: {
            movement: 'Full Turkish Get-ups',
            repScheme: '4x 4ea'
        },
        superSet: {
            movement1: 'KB Drag Throughs',
            repScheme1: '4x 10',
            movement2: 'KB Alt Catches',
            repScheme2: '4x 20'
        },
        metcon: {
            movement: 'Pyramid',
            repScheme: 'EMOM - 20 KB Swings + 10 Push-ups - rest remainder of minute ',
            weight: 'Decrease Push-ups by 1 each minute - Swings stay the same'
        },
        finisher: {
            movement: 'KB Flutter Kicks x 500'
        }
    }


];

// const Rwod = workouts[Math.floor(Math.random() * workouts.length)];

export default function() {
    return _shuffle(workouts)[0]
    
}; 
