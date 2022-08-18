const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

const getFoods = async (req, res, next) => {
    try {
        // const response = await getCategoriesModel()

        // if(response.error) return next(response)

        // res.status(201).send({
        //     status: 200,
        //     data: response
        // })
    } catch (error) {
        console.log(error);
    }
}

const postFood = async (req, res) => {
    try {
        const file = req.files?.img
        const fileName = Date.now() + file?.name

        const storageRef = ref(storage, `images/${fileName}`);

        uploadBytes(storageRef, file.data)
            .then(() => {
                console.log('Uploaded a blob or file!');
            }).catch(error => res.send({
                status: 203,
                message: error.message || error
            }))

        req.body.food_img = await getDownloadURL(storageRef)

    } catch (error) {
        console.log(error);
    }
}