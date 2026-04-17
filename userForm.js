function userForm(req, res) {
  res.write(`
        <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" /><br /><br />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" /><br /><br />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    `);
}

module.exports = userForm;
