// 404 Handler
export const notFound = (req, res, next) => {
    res.status(404).render('pages/home', {
        title: '404 - Not Found',
        message: 'Page not found!'
    });
};

// General Error Handler
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/home', {
        title: 'Error',
        message: 'Something went wrong!'
    });
};