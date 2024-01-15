import kaboom from "kaboom"

import { io } from "socket.io-client";

const socket = io.connect("http://localhost");

kaboom({
	background:"#000000"
})

loadSprite("bean", "sprites/bean.png")

loadSprite("ghost",'sprites/char.png');
loadSprite("tree",'sprites/tree.png');
loadSprite("pinkTree","sprites/pinkTree.png");
loadSprite("house","sprites/house.png")
loadSprite("houseDown","sprites/houseDown.png");
loadSprite("grass","sprites/grass.png");
loadSprite("road","sprites/path.png");
loadSprite("water","sprites/water.png");
loadSprite("bridge","sprites/bridge.png");
loadSprite("border","sprites/border.png");
loadSprite("borderLeft","sprites/borderLeft.png");
loadSprite("leftCorner","sprites/leftCorner.png");
loadSprite("house1","sprites/house1.png");
loadSprite("house2","sprites/house2.png");
loadSprite("house3","sprites/house3.png");
loadSprite("house4","sprites/house4.png");
loadSprite("pathUp","sprites/pathUp.png");
loadSprite("pathCorner","sprites/pathCorner.png");
loadSprite("borderRight","sprites/borderRight.png");
loadSprite("rightCorner","sprites/rightCorner.png");
loadSprite("road3","sprites/pathCorner3.png");
loadSprite("road2","sprites/pathCorner2.png");
loadSprite("boat1","sprites/boat1.png");
loadSprite("boat2","sprites/boat2.png");

loadSpriteAtlas('/sprites/run.png',{
	'emma':{
		x:0,
		y:0,
		sliceX:8,
		anims:{
			'walk-down': {from : 0 , to: 7, loop:true,speed:15}
		}
	}
})
loadSound("bg", "sounds/bg.mp3");
scene("main",()=>{

	play("bg");
	addLevel([
		"++++++++++++++++++++++++++$",
		"---====$=========r========$",
		"+++$=ho$===ho====r========$",
		"+++$=me$===me====r--------$",
		"+++$=t|$====//////3=======$",
		"+++$=t|$vvvv===vvr|=======$",
		"kl+$=t|<--------->|=======$",
		"bbb===c///////////2=======$",
		"+++$======================$",
		"+++$======================$",
		"+++<----------------------$",
		"++++++++++++++++++++++++++$",
		"++++++++++++++++++++++++++$",

		
	], {
		tileWidth: 64,
		tileHeight: 64,
		tiles: {
			"=": () => [
				sprite("grass"),
			],
			"^": () => [
				sprite("house"),
				area(),
			],
			"*": () => [
				sprite("houseDown"),
				area(),
			],
			"+": () => [
				sprite("water"),
				area(),
				body({ isStatic: true }), 
			],
			"b": () => [
				sprite("bridge"),
				area(),
			],
			"-": () => [
				sprite("border"),
				area(),
				body({ isStatic: true }), 
			],
			"$": () => [
				sprite("borderLeft"),
				area(),
				body({ isStatic: true }), 
			],
			"<": () => [
				sprite("leftCorner"),
				area(),
			],
			"h": () => [
				sprite("house1"),
				area(),
			],
			"o": () => [
				sprite("house2"),
				area(),
			],
			"m": () => [
				sprite("house3"),
				area(),
			],
			"e": () => [
				sprite("house4"),
				area(),
			],
			"/": () => [
				sprite("road"),
				area(),
			],
			"|": () => [
				sprite("pathUp"),
				area(),
			],
			"c": () => [
				sprite("pathCorner"),
				area(),
			],
			"t": () => [
				sprite("pinkTree"),
				area(),
				
			],
			"r": () => [
				sprite("borderRight"),
				area(),
				body({ isStatic: true }), 
				
			],
			">": () => [
				sprite("rightCorner"),
				area(),
				
			],
			"v": () => [
				sprite("tree"),
				area(),
				
			],
			"3": () => [
				sprite("road3"),
				area(),
				
			],
			"2": () => [
				sprite("road2"),
				area(),
				
			],
			"k": () => [
				sprite("boat1"),
				area(),
				
			],
			"l": () => [
				sprite("boat2"),
				area(),
				
			],
			"g": () => [
				sprite("ghost"),
				area(),
				
			],
		}
	})
	const player =  add([
		sprite("ghost"),
		pos(200,370),
		area(),
		body(),
		outline(),
		"player"
	])
	const ghost = get("player")[0];
	onKeyDown("a", () => {
		player.move(-150, 0);
	  });
	onKeyDown("d", () => {
		player.move(150, 0);
	});
	onKeyDown("w", () => {
		player.move(0, -150);
	  });
	onKeyDown("s", () => {
		player.move(0, 150);
	});
	player.onUpdate(() => {
		camPos(player.pos)
	})

})

go("main");

