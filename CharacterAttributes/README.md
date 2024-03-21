## Challenge

An RPG game lets you assign points to various attributes of your character to improve it.
The points earned by the characters are available to assign across all attributes.
Each attribute can only be assigned at most 70% of totalPoints (rounded down to the nearest integer) unless totalPoints is 1, in which case only one attribute can get a maximun of 1 point.
The sum of all points assigned plus the points remaining should add up to totalPoints.

Implement the CharacterAttributes component with the logic described above and the following requirements:
- Points should be assigned by moving the slider and remaining points should be displayed in the span tag.
- When initialized, all points are available and all sliders start at 0.
- Each slider must have a range from 0 up to totalPoints.

For example, if totalPoints is 15, then the user shouldn't be able to drag the slider past 10 even if more points are available.