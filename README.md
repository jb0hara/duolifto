# Duolifto

A gym app: colour-coded exercise library (252 exercises), a coach that suggests sessions, workout builder with supersets, set-by-set weight logging, goals, training programs and a progress dashboard.

Open it at https://jb0hara.github.io/duolifto/ and use "Add to Home Screen" to install it. It works offline and keeps your data on your device (Settings has backup and restore).

The site files live at the repository root. `source/` holds the exercise, muscle and program data and the build scripts: edit the data, run `python3 source/src/site_build.py` from a folder containing `data/` and `src/`, and copy `dist/site/` to the root.
