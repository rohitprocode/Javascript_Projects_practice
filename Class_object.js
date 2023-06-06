class RailwayForm{
    submit(){
        alert(this.name + " : Your Form is Submitted" + this.trainNo );
    }
    cancel(){
        alert(this.name + " : Your Form is Cancelled" + this.trainNo );
    }
    fill(given_name,train_no){
        this.name = given_name;
        this.trainNo = train_no;
    }
}

// Create form for Rohan
let RohanForm = new RailwayForm();
//Fill Form for Rohan
RohanForm.fill("Rohan",458755);

//Create form for Mohan
let MohanForm1 = new RailwayForm();
let MohanForm2 = new RailwayForm();
//Fill form for Mohan
MohanForm1.fill("Mohan",165868);
MohanForm2.fill("Mohini",144483);



RohanForm.submit();
MohanForm1.submit();
MohanForm1.cancel();
MohanForm2.submit();
MohanForm2.cancel();