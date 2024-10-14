const notFound = (req, res) => res.status(404).send("Not a recognized route!");

module.exports = notFound;
