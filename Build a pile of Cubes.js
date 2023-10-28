function findNb(m) {
    let suma = 0;
    let N = 1;
    
    while (suma < m) {
        suma += N * N * N;
        if (suma === m) {
            return N;
        }
        N++;
    }
    
    return -1;
}

