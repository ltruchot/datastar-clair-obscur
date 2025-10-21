```
python3 -m pixels2svg --color_tolerance=100 orca.jpg
pyxelate orca2.png output.png --palette 2 --depth 2
pyxelate orca2.png output.png --palette 3 --factor 7 --dither "naive" --alpha .6
python3 -m pixels2svg output.png --output toto.svg
```
