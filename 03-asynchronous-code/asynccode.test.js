const fetchData = (callback) => {
    setTimeout(() => {
        callback("Butter");
    },100 );
}

test('fetchData has data with value "Butter"', (done) => {
        const callback = (data) => {
            expect(data).toBe("Butter");
            done();
        }
        fetchData(callback);
})

//-------------------------------------------------------

const fetchDataPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Butter");
        }, 100);
    })
}

test('fetchDataPromise should have value Butter', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe("Butter");
    })
})

//testing with async
test('fetchDataPromise should have value Butter using async', async () => {
   const result = await fetchDataPromise();
   expect(result).toBe('Butter');
})


//-----------------------------------------------------------

const fetchDataPromiseWithErrorMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network is down");
        },100)
    })
}


test('fetchDataPromise fails with an error message "Network is down"',  () => {
     return fetchDataPromiseWithErrorMessage().catch(e => expect(e).toBe('Network is down')); 
})

test('fetchDataPromise fails with an error message "Network is down" using async', async () => {
    try {
        const result = await fetchDataPromiseWithErrorMessage();
    } catch (error) {
        expect(error).toBe('Network is down');
    }
    
})


//--------------------------------------------------------
