
$(document).ready(function () {
    var viewModel = function () {
        debugger;
        var self = this;
        self.Email = ko.observable("");
        self.Password = ko.observable("");
        self.Name = ko.observable("");
        self.PhoneNumber = ko.observable("");
        self.PasswordRepeat = ko.observable("");
        self.save = function () {
            debugger;
            var uncomplete = false;
            if (self.Email() === "" | self.Email() === null) {
                uncomplete = true;
                $("#email").addClass("input--red");

            }
            if (self.Password() === "" | self.Password() === null) {
                uncomplete = true;
                $("#password").addClass("input--red");

            }
            if (self.PasswordRepeat() === "" | self.PasswordRepeat() === null) {
                uncomplete = true;
                $("#repeat").addClass("input--red");

            }
            if (self.Name() === "" | self.Name() === null) {
                uncomplete = true;
                $("#name").addClass("input--red");

            }
            if (self.PhoneNumber() === "" | self.PhoneNumber() === null) {
                uncomplete = true;
                $("#number").addClass("input--red");

            }
            if (self.PasswordRepeat() !== self.Password()) {
                uncomplete = true;
                $("#password").addClass("input--red");
                $("#repeat").addClass("input--red");
            }
            if (uncomplete === false) {
                $.ajax({
                    url: "/Home/newUser",
                    type: "POST",
                    dataType:"json",
                    data: {
                            "Email" : self.Email,
                            "Password": self.Password,
                            "Name": self.Name,
                            "PhoneNumber": self.PhoneNumber
                        
                    }
                })
            }
        }

    }

    ko.applyBindings(new viewModel())

    
});
