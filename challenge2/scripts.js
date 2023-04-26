// script.js

function add  (a,b,c)  { return console.log(a+b+c) }

function multiply  (a,b,c)  { return console.log(a*b*c)}

function internal() {
    this.internal.a=2
	this.internal.b=4
	this.internal.c=6
	if(this===example1){
	const added = this.add(this.internal.a, this.internal.b, this.internal.c);
    } else{
	const multiplied = this.multiply(this.internal.a, this.internal.b, this.internal.c);
    }
	return this;
  }

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()