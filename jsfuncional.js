// JavaScript: The Good Parts, Douglas Crockford

function identityf(x) {
    return function() {
        return x;
    }
}

function addf(x) {
    return function (y) {
        return x + y;
    }
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;    
}

function lift(fun) {
    return function (x) {
        return function(y) {
            return fun(x, y);
        };
    }
}

function curry(fun, x) {
    return function (y) {
        return fun(x, y);
    };
}

function twice(fun) {
    return function (x) {
        return fun(x, x);
    };
}

function rev(fun) {
    return function(x, y) {
        return fun(y, x);
    };
}

function sq(x) {
    return x ** 2;
}

double = curry(mul, 2);

function composeu(f, g) {
    return function(x) {
        return g(f(x));
    }
}

function composeb(f, g) {
    return function (x, y, z) {
        return g(f(x, y), z);
    }
}

function limit(f, n) {
    return function(x, y) {
        if (n >= 1) {
            n -= 1;
            return f(x, y);
        }
        return undefined;
    }
}

function from(start) {
    return function () {
        const next = start;
        start += 1;
        return next;
    }
}

function to(gen, max) {
    return function () {
        val = gen();
        if (val < max) {
            return val;
        }
        return undefined;
    }
}

function fromTo(start, end) {
    index = from(start);
    return to(index, end);
}

function element(arr, gen = fromTo(0, arr.length)) {
    return function () {
        let i = gen();
        if (i !== undefined) {
            return arr[i];
        }
    };
}

function collect(gen, arr) {
    return function () {
        let val = gen();
        if (val !== undefined) {
            arr.push(val);
        }
    }
}

function filter(gen, predicate) {
    return function () {
        let val;
        do {
            val = gen();
        } while (
            val !== undefined &&
            !predicate(val)
        );
        return val;
    }
}

fil = filter(fromTo(0, 5), function third(value) {
        return (value % 3) === 0;
})

function concat(gen1, gen2) {
    return function () {
        val1 = gen1();        
        return val1 === undefined ? gen2() : val1;
    }
}

con = concat(fromTo(0, 3), fromTo(0, 2));

function gensymf(symbol) {
    let number = 0;
    return function () {
        number += 1;
        return symbol + number;
    }
}

function fibonaccif(a, b) {
    return function () {
        aux = a, a = b, b = a + aux;
        return aux;
    }
}

function counter(n) {
    return {
        up : function () {
            n += 1;
            return n;
        },
        down : function () {
            n -= 1;
            return n;
        }
    }
}

function revocable(fun) {
    return {
        invoke: function (x, y) {
            if (fun !== undefined) {
                return fun(x, y);
            }
        },
        revoke: function () {
            fun = undefined;
        }
    }
}

function m(value, source) {
    return {
        value: value,
        source: (typeof source === 'string')
            ? source
            : String(value)
    };
}

function addm(obj1, obj2) {
    return m(
        obj1.value + obj2.value,
        `(${obj1.source}+${obj2.source})`
    )
}

function liftm(func, str) {
    return function (obj1, obj2) {
        if (typeof obj1 == "number") {
            obj1 = m(obj1);
        }
        if (typeof obj2 == "number") {
            obj2 = m(obj2);
        }
        return m(
            func(obj1.value, obj2.value),
            `(${obj1.source}${str}${obj2.source})`
        )
    }
}

function square(n) {
    return n ** 2;
}

function exp(value) {
    return (Array.isArray(value))
        ? value[0](exp(value[1]), exp(value[2]))
        : value;
}


function addg(first) {
    function more(next) {
        if (next === undefined) {
            return first;
        }
        first += next;
        return more;
    }
    if (first !== undefined) {
        return more;
    }
}

function liftg(binary) { 
    return function (first) {
        if (first === undefined) {
            return first;
        }

        return function more(next) {
            if (next === undefined) {
                return first;
            }
            first = binary(first, next);
            return more;
        }
    }
}

function arrayg(first) {
    arr = [];

    return more(first);

    function more(next) {
        if (next === undefined) {
            return arr;
        }
        arr.push(next);
        return more;
    }
}

function continuize(unary) {
    return function (callback, value) {
        return callback(unary(value));
    }
}

function pubsub() {
    subscribers = [];
    return {
        subscribe: function (subscriber) {
            subscribers[subscribers.length] = subscriber;
        },
        publish: function(arg) {
            subscribers.forEach(subscriber => {
                subscriber(arg);
            });
        }
    }
}

my_pubsub = pubsub();
my_pubsub.subscribe(console.log);
my_pubsub.publish("Funca!");
