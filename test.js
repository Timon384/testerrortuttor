const assert = require("assert")
const index = require("../index")

describe("Basic test", function() {
    it("man", function() {
        assert(index.man, "index.man exists")
    })
    it("name", function() {
        let man = index.man
        assert(man.name, "man.name exists")
    })
    it("surname", function() {
        let man = index.man
        assert(man.surname, "man.surname exists")
    })
    it("fullName", function() {
        let man = index.man
        assert(man.fullName() == `${man.surname} ${man.name}`, "man.fullName() returns surname + ' ' + name")
    })
    it("fullName extended", function() {
        let man = index.man
        man.name = "serge"
        man.surname = "belyaev"
        assert(man.fullName() == `${man.surname} ${man.name}`, "Fullname function works correctly")
    })
    it("Room", function() {
        assert(index.Room, "index.Room exists")modal
    })
    it("windows", function() {
        let room = new index.Room()
        assert(room.windows > 0, "room.windows is number and more than 0")
    })
    it("owner", function() {
        let room = new index.Room()
        assert(room.owner, "room.owner exists")
    })
})

/*
AssertionError [ERR_ASSERTION]: room.windows is number and more than 0
+ expected - actual

-false
+true

at Context.<anonymous> (test/webtech2-test.js:31:9)

2) Basic test
owner:
    AssertionError [ERR_ASSERTION]: room.owner exists
at Context.<anonymous> (test/webtech2-test.js:35:9)
*/
