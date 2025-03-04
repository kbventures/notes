## If all else fails:
rm -rf node_modules && rm -f package-lock.json && npm i -D

rm -rf node_modules
Some modules, specially ones that use native modules or binaries most of the time cache things inside their own folders on node_modules.
Other tools like typescript also do use a cache but for things like compilation so they don't have to recompile everything everytime and the process can be sped up.
Deleting node_modules help with that.
rm -f package-lock.json
For reasons beyond our mortal understanding that are only known and comprehensible by the eldritch gods, the package-lock can get fucked up.
Deleting and rebuilding it sometimes helps.
It is very annoying in astro projects... ask me how I know :melting_face:
npm i -D
After throwing out the baby with the bathwater, just create a new bathtub, fill it with nice and cozy bath bombs, and put the baby inside of it.
All of that while explicitly saying we are in dev mode and want to debug the baby (-D) because the packages can get confused by the lack of the NODE_ENV var sometimes and assume whatever the heck they want out of that.
It is a gamble, sometimes it assumes production, sometimes it assumes development. Explicitly specifying it is in development helps.
Protip: try running npm ci afterwards, it freezes the lockfile so if things are broken it won't install. It is ment to be ran in production and ci environments where you expect everything to be frozen solid.





4:42
BTW normally node_modules isn't hidden by default for me. Do we have this as a config thing somewhere?
No... and it shouldn't have the "hidden" flag set