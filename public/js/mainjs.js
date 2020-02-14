function checkvalidation()
{
	var lnth=0, msg="", val=0;
	var name = document.getElementById("name").value;
	var emailid = document.getElementById("emailid").value;
	var message = document.getElementById("message").value;
	
	lnth=name.length;
	if(lnth>2)
	{
		lnth=emailid.length;
		if(lnth>2)
		{
			lnth=message.length;
			if(lnth>2)
			{
				msg="Your Message sent to admin";
			}
			else
			{
				val=1;
				msg="Enter Message Please ";
			}
		}
		else
		{
			val=1;
			msg="Enter emailid Please ";
		}
	}
	else
	{
		val=1;
		msg="Enter Name Please ";
	}
	
	
	
	alert('"'+msg+'"');
}