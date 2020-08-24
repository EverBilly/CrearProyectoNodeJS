// Funcion que esta siendo parte de un objeto 
const controller = {}

// Estos son metodos
controller.list = (req, res) => {
    //Metodo para obtener la conexion a mysql
    req.getConnection((err, conn) => {
        conn.query('select * from users', (err, users) => {
            if(err){
                res.json(err);
            }
            // console.log(users);
            res.render('customers', {
                data: users
            });
        })
    })
}

controller.saveCustomer = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into users set ?', [data], (err, user) => {
            // console.log(user); 
            res.redirect('/');
        });
    });
};

controller.editCustomer = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select * from users where id = ?', [id], (err, user) => {
            res.render('customers_edit', {
                data: user[0]
            });
        })
    })
}

controller.updateCustomer = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('update users set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

controller.deleteCustomer = (req, res) => {
    // console.log(req.params.id);
    // const id = req.params.id;
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from users where id = ?', [id], (err, rows) => {
            res.redirect('/');
        })
    })
};

module.exports = controller;
