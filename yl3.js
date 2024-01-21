class Student {
    #studentId;
    #studentNimi;
    #staatus;

    constructor(nimi, id) {
        this.#studentNimi = nimi;
        this.#studentId = id;
        this.#staatus = 'Active';
    }

    getId() {
        return this.#studentId;
    }

    setName(name) {
        this.#studentNimi = name;
    }

    getName() {
        return this.#studentNimi;
    }

    setStatus(status) {
        if (status == 'Active' || status == 'Expelled' || status == 'Finished' || status == 'Inactive') {
            this.#staatus = status;
        }
    }

    getStatus() {
        return this.#staatus;
    }


}

const tudeng = new Student('Mikk', 4);


console.log(tudeng.getId());
console.log(tudeng.getName());
console.log(tudeng.getStatus());
console.log(tudeng.setStatus('Finished'));
console.log(tudeng.getStatus());


