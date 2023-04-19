const ModelOptions ={
    toJSON: {
        virtuals: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj;
        }
    },
    toObject: {
        virtual: true,
        transform: (_, obj) => {
            delete obj._id;
            return obj;
        }

},
versionKey: false,
timesTamps: true
};

export default ModelOptions;