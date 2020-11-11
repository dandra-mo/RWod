import _shuffle from "lodash.shuffle";

const workouts = [
    {
        power: {
            movement: 'Hang Power Snatch',
            repScheme: '6x 3'
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
            repScheme: '5x 3'
        },
        strength: {
            movement: 'KB Push Press',
            repScheme: '4x 6 - moderately heavy weight'
        },
        superSet: {
            movement1: 'Front-rack Walking Lunges',
            repScheme1: '3x 12 steps - moderate weight',
            movement2: 'DB Box Shoulders',
            repScheme2: '3x 10 - moderately light weight'
        },
        metcon: {
            movement: 'On and Off',
            repScheme: '8 Front Squats - 10 cal row -  6 TTB (toes to bar)',
            weight: '5min AMRAP/3min OFF - 4min AMRAP/2min OFF - 5min AMRAP'
        },
        finisher: {
            movement: '100 ab-mat sit-ups - 5min cap - 5 Vups every 10 reps'
        },
    },
    {
        power: {
            movement: 'Clean and Jerks',
            repScheme: '4x 2'
        },
        strength: {
            movement: 'Front Squats',
            repScheme: '4x 4 - HEAVY'
        },
        superSet: {
            movement1: 'Pull-ups',
            repScheme1: '3x 12',
            movement2: 'Good Mornings',
            repScheme2: '3x 12'
        },
        metcon: {
            movement: 'Chipper Jones',
            repScheme: '60 GTOH - 60 C2B Pull-ups - 60 Burpees',
            weight: 'chipper'
        },
        finisher: {
            movement: 'accumulate 1000m banded farmers carry'
        }
    },
    {
        power: {
            movement: 'Speed Deadlifts',
            repScheme: '8x3 EMOM'
        },
    strength: {
            movement: 'Back Squats',
            repScheme: '4x 6'
        },
    superSet: {
            movement1: 'GHR (glute hame raises)',
            repScheme1: '3x 8',
            movement2: 'BB/KB/DB row',
            repScheme2: '3x 12'
        },
    metcon: {
            movement: 'Watch Yourself!',
            repScheme: 'ASCENDING Deadlifts - 6 TTB',
            weight: '10rds; reps = round (rd1 = 1 DL, rd2 = 2 DL...) - 6 TTB each round'
        },
    finisher: {
            movement: '3-5 rds of 8 weighted deadbugs, 8 weighted toe touches, 8 weighted vups'
        }
    },
    {
        power: {
            movement: 'Front-Squat',
            repScheme: '10x 3 EMOM'
        },
        strength: {
            movement: 'Push Press',
            repScheme: '4x 6ea'
        },
        superSet: {
            movement1: '1/2 Kneeling landmine press',
            repScheme1: '3x 12ea',
            movement2: 'Step-ups',
            repScheme2: '3x 8ea'
        },
        metcon: {
            movement: 'Uh Workout',
            repScheme: '15 KB Thrusters - 30 DUs',
            weight: '20min AMRAP'
        },
        finisher: {
            movement: 'accumulate 3-5min deep squat holds'
        }

    },
    {
        power: {
            movement: 'Push Jerks',
            repScheme: '3-3-2-2-1-1-1'
        },
        strength: {
            movement: 'Box Squat',
            repScheme: '4x 5ea'
        },
        superSet: {
            movement1: 'Bar/ring dips',
            repScheme1: '3x 6-8',
            movement2: 'Step-Overs',
            repScheme2: '3x 8ea'
        },
        metcon: {
            movement: 'On Your Own',
            repScheme: '12 Handstand PUs - 10 Cal Assault Bike',
            weight: '5rds for time'
        },
        finisher: {
            movement: '40ea IR/ER rotations + press (slow, controlled)'
        }
    },
    {
        power: {
            movement: 'Snatch-Grip Clean Pulls',
            repScheme: '5x 3'
        },
        strength: {
            movement: 'Snatch Grip Deadlifts',
            repScheme: '4x 6ea'
        },
        superSet: {
            movement1: '4sec negative pull-ups',
            repScheme1: '3x 6-8',
            movement2: 'Band pull-throughs',
            repScheme2: '3x 15'
        },
        metcon: {
            movement: 'Jump up, Jump up!',
            repScheme: '8 Heavy KB Swings -  6 Burpess Box Jump Overs',
            weight: '12min AMRAP'
        },
        finisher: {
            movement: 'Single Arm KB Holds - while standing, hold HEAVY KB in hand on 1 side for max time; switch sides'
        }
    },
    {
        power: {
            movement: 'DB/KB Snatch',
            repScheme: '5x 5ea'
        },
        strength: {
            movement: 'Deadlifts',
            repScheme: 'build to near max single'
        },
        superSet: {
            movement1: 'Pendlay Row',
            repScheme1: '3x 10',
            movement2: 'Reverse Lunges',
            repScheme2: '3x 8ea'
        },
        metcon: {
            movement: '15 Double KB Snatch - 250m Row',
            repScheme: '15 Double KB Snatch - 250m Row',
            weight: '10min ON / 5min OFF/ 10min ON'
        },
        finisher: {
            movement: 'Hip thrusts; 3-4 sets of 12-15'
        }
    },
    {
        power: {
            movement: 'Drop OH Squat',
            repScheme: '8x 3'
        },
        strength: {
            movement: 'Bench Press',
            repScheme: '4x 3'
        },
        superSet: {
            movement1: 'SL Toe Elevated RDL',
            repScheme1: '3x 12ea',
            movement2: 'KB/DB Floor Press',
            repScheme2: '3x 10'
        },
        metcon: {
            movement: 'Not as Bad',
            repScheme: 'OH Squats - Dips - Box Jumps',
            weight: '21-15-9'
        },
        finisher: {
            movement: '3rds - 15 Bent Over Lateral Raises'
        }
    },
    {
        power: {
            movement: 'Clean Series (clean pull, hang clean, power clean = 1)',
            repScheme: '5x 2 - Ascending E2OM'
        },
        strength: {
            movement: 'Speed Bench Press',
            repScheme: '8x 3 EMOM'
        },
        superSet: {
            movement1: 'Deep Pushups (hands and feet elevated)',
            repScheme1: '3x 12',
            movement2: 'Band Pull-aparts',
            repScheme2: '3x 15'
        },
        metcon: {
            movement: 'No Time to Play',
            repScheme: '15 Hang Power Cleans - 9 Burpees Over Bar',
            weight: '6 rounds for time'
        },
        finisher: {
            movement: 'Accumulate 200 banded shrugs'
        },
    },
    {
        power: {
            movement: '3 Position Pushups (Elevated, Incline, Plyo)',
            repScheme: '4x 5ea Position'
        },
        strength: {
            movement: 'Split Squat + Iso Holds',
            repScheme: '4x 20 + :30'
        },
        superSet: {
            movement1: '3-Way Lunges',
            repScheme1: '3x 8ea',
            movement2: 'Dips',
            repScheme2: '3x 12'
        },
        metcon: {
            movement: 'This Should be Fun',
            repScheme: '12 Med-ball pounds - 60 DUs',
            weight: '16min AMRAP'
        },
        finisher: {
            movement: '15-12-9-12-15 Seated Z-press/pull ups'
        }
    },
    {
        power: {
            movement: 'Push Press',
            repScheme: '5-5-4-4-3-2-1-1-1'
        },
        strength: {
            movement: 'Pause Front Squat',
            repScheme: '4x 4'
        },
        superSet: {
            movement1: '1/2 Kneeling Row + SA DB Press',
            repScheme1: '3x 8ea',
            movement2: 'High Step-Ups',
            repScheme2: '3x 6ea'
        },
        metcon: {
            movement: 'Press Over',
            repScheme: 'Devils Press - DB Box Step Overs',
            weight: '21-15-9'
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
            repScheme1: '3x 15',
            movement2: 'Box Jumps',
            repScheme2: '3x 5'
        },
        metcon: {
            movement: 'Go Hard!',
            repScheme: '8 Heavy Deadlifts - 12 STOH - 15 Box Jumps',
            weight: '3 rounds for time'
        },
        finisher: {
            movement: 'Ring Rows 4x20'
        }
    },
    {
        power: {
            movement: 'Power Cleans',
            repScheme: '5x 3'
        },
        strength: {
            movement: 'Heavy Hip Thrusts',
            repScheme: '3x 8'
        },
        superSet: {
            movement1: 'Bodyweight Cossak Squat',
            repScheme1: '3x 8ea',
            movement2: 'Weighted Pull-ups',
            repScheme2: '3x6'
        },
        metcon: {
            movement: '8 KB Cleans - 12 TTB - 50ft HandStand Walks',
            repScheme: '8 KB Cleans - 12 TTB - 50ft HandStand Walks',
            weight: '5min AMRAP / 3min off / 5min AMRAP / 3min off / 5min AMRAP'
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
            movement: 'Head Strong',
            repScheme: '1000m Row directly into... ',
            weight: '5rds of 60 Air Squats - 10 HSPUs'
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
            movement: '3 Rope Climbs - 100ft Banded Farmers Carry',
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
            movement: '',
            repScheme: '5 KB Snatches - 10 KB Swings - 15 Bottoms up KB Goblet Squats',
            weight: '8-10rds - same weight throughout'
        },
        finisher: {
            movement: 'Run, Bike, Row for 15 - 20min'
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
            repScheme1: '3x 6 + 6ea',
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
            repScheme: 'Deadlifts - HSPU',
            weight: '21-15-9'
        },
        finisher: {
            movement: '3rds - 8 Seated Z-press - 8 Eccentric Chin-ups'
        }
    },
    {
        power: {
            movement: 'KB/DB Deadlifts',
            repScheme: '5x 15'
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
            repScheme: '7x 3 EMOM'
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
            movement: 'BodyWeight Builder',
            repScheme: 'Air Squats - TTB',
            weight: '50-40-30-20-10 reps/rounds for time'
        },
        finisher: {
            movement: '5rds: 20 Band Pull-Aparts - Max Time L-sit Holds'
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
            movement: 'Accumulate 200 donkey kicks each side'
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
            movement: '5rds: 6 Reverse Hypers - 8 Biceps of choice'
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
            movement1: 'DB/KB Snatch to Reverse Lunge',
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
            movement: 'KB Complex (Russian Swing, American Swing, Snatch)',
            repScheme: '4x 6 Snatches each side'
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
    },
    {
        power: {
            movement: 'Bench Press',
            repScheme: '4x 9'
        },
        strength: {
            movement: 'Incline DB Press',
            repScheme: '15-12-9-12-15'
        },
        superSet: {
            movement1: 'Dips',
            repScheme1: '3x 9',
            movement2: 'SA Banded Flys',
            repScheme2: '4x 15ea'
        },
        metcon: {
            movement: 'Rider',
            repScheme: 'Cal Bike - Pushups - Vups',
            weight: '27-21-15-9 - rest as needed'
        },
        finisher: {
            movement: '50-60 Lying DB Tricep Extentions'
        }
    },
    {
        power: {
            movement: 'Underhand Strict Shoulder Press',
            repScheme: '4x 12'
        },
        strength: {
            movement: 'Deadlifts',
            repScheme: '4x 8'
        },
        superSet: {
            movement1: 'Standing Alt DB Press (left, right, together = 1)',
            repScheme1: '3x 8',
            movement2: 'Walking Lunges',
            repScheme2: '3x 20 steps'
        },
        metcon: {
            movement: 'On You',
            repScheme: 'OH Walking Lunges - DB Box Shoulders (light weight)',
            weight: '21-15-12-9 - rest as needed'
        },
        finisher: {
            movement: '3x: 30 Kneeling Band Hip Hinges - 30 Band RDLs'
        }
    },
    {
        power: {
            movement: 'BB Bent Over Row',
            repScheme: '4x 10-12'
        },
        strength: {
            movement: 'Chest Supported Row',
            repScheme: '15-12-9-12-15'
        },
        superSet: {
            movement1: 'Seated Low Cable/Band Row',
            repScheme1: '4x 15',
            movement2: 'Shrugs',
            repScheme2: '4x 20'
        },
        metcon: {
            movement: 'Gun Show',
            repScheme: 'Barbell Curl - Wrist Curls - Reverse Curls',
            weight: '18-14-9-5'
        },
        finisher: {
            movement: 'max time bar/ring holds'
        }
    },
    {
        power: {
            movement: 'Incline DB Flys',
            repScheme: '15-12-9'
        },
        strength: {
            movement: 'DB Flys',
            repScheme: '15-12-9'
        },
        superSet: {
            movement1: 'Band/Cable Crossover',
            repScheme1: '15-12-9',
            movement2: 'OH DB Extensions',
            repScheme2: '3x 12'
        },
        metcon: {
            movement: 'Ab Complex',
            repScheme: 'Crunches - Heel Touches - Standing Cable/Band Oblique Crunches',
            weight: '4x 30ea'
        },
        finisher: {
            movement: 'Tabata Pushup Plank Holds - 10rds'
        }
    },
    {
        power: {
            movement: 'Zercher Squats',
            repScheme: '4x 8'
        },
        strength: {
            movement: 'Plate/DB Lateral High Raises',
            repScheme: '4x 12'
        },
        superSet: {
            movement1: 'Leg Extensions',
            repScheme1: '4x 15',
            movement2: 'DB Bent Over Front + Lateral Raises',
            repScheme2: '4x 10'
        },
        metcon: {
            movement: 'Countdown',
            repScheme: 'Skater Squat - Cossak Squat - 15 sec Runs',
            weight: 'Reps - 15,14,13...1'
        },
        finisher: {
            movement: '40ea Side Plank DB External Rotations'
        }
    },
    {
        power: {
            movement: 'Sumo Deadlifts',
            repScheme: '4x 8'
        },
        strength: {
            movement: 'Lat Pulldowns',
            repScheme: '4x 10'
        },
        superSet: {
            movement1: 'Toe Elevated SL RDLs',
            repScheme1: '3x 8ea',
            movement2: 'Reverse Grip Lat Pulldowns',
            repScheme2: '3x 15'
        },
        metcon: {
            movement: 'Evan',
            repScheme: '400m Run - 30 DB/KB DLs - 30 Pullups',
            weight: '5rds'
        },
        finisher: {
            movement: '3x 20ea Shugs - Bicep Curl of Choice'
        }
    }


];

// const Rwod = workouts[Math.floor(Math.random() * workouts.length)];

export default function() {
    return _shuffle(workouts)[0]
    
}; 
