let Person={
    talk : true,
    canfly(){
        return "Can't Fly";
    },
};

let Dinesh={
    run : true,

    CanSwim(){
        return "YES";
    },

    __proto__:Person,
};

console.log(Dinesh.talk)
console.log(Dinesh.canfly())
console.log(Dinesh.run)
console.log(Dinesh.CanSwim())