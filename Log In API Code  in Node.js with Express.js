
app.post('/login', (req, res) => {
	
	if (req.query.email && req.query.password) {
		
		con.query('SELECT * FROM user1 WHERE email = ? AND password = ?',
        [
            req.query.email, req.query.password
        ],
        (err, results, fields) =>{
			if (err) throw err;
			if (results.length > 0) {
				res.send("Logged IN  ...  Successfuly...")

			} else {
				res.send('Incorrect email or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter email and Password!');
		res.end();
	}
});
