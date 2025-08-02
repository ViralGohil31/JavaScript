class Sequence {
    constructor(start=0, end=Infinity, interval=1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.iterator]() {
        let counter = 0;
        let newIndex = this.start;

        return {
            next: () => {
                if (newIndex <= this.end) {
                    let result = {value: newIndex, done: false};
                    newIndex += this.interval;
                    counter++;
                    return result;
                }
                return {value: counter, done: true};
            }
        }
    }
};


let evenNo = new Sequence(4, 20, 2);

for(const number of evenNo) {
    console.log(number);
}


/// Use Case of Iterator : Paginated API Results

async function mockFetchStudents() {
    const students = [
        {id: 1, name: 'Alice', grade: 'A'},
        {id: 1, name :'Bob', grade: 'B'},
      ];

    console.log("student data", JSON.stringify(students));

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(
                 new Response(JSON.stringify(students), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                  })
            );
        }, 1000);
    });
}

function paginate(api, totalPage) {
    let page = 1;
    
    return {
        async next() {
            //const response = await fetch('${api}?page=${page}');
            const response = await mockFetchStudents();
            const data = await response.json();
            if (data.length == 0 || page >= totalPage) return {done: true};
            page++;
            return {value: data , done: false};
        
        },
        [Symbol.asyncIterator]() {
            return this;
        }
    };
}

//anonymouse function
(async () => {
    for await(const users of paginate('http://api.example.com/users', 10)) {
        console.log(users); //log each page of users
    }
})();


// custom Object iteration


class Playlist{
    constructor(songs) {
        this.songs = songs;
    }

    [Symbol.iterator]() {
        let index = 0;
        const songs = this.songs;
        return {
            next() {
                if (index <= songs.length) {
                    return {value: songs[index++], done: false};
                }
                return {done: true};
            }
        };
    }
}


const myPlayList = new Playlist(["song1", "song2", "song3"]);

for(const song of myPlayList) {
    console.log("Playing", song);
}
