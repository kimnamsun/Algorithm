function solution(n, m) {
    const gcd = GCD(n, m);
    const lcm = (n * m) / gcd;

    return [gcd, lcm];
}

function GCD(n, m) {
    return m === 0 ? n : GCD(m, n % m);
}