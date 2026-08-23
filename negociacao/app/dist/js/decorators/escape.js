export function escape() {
    return function (target, propetryKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let resultado = metodoOriginal.apply(this, args);
            if (typeof resultado === 'string') {
                resultado = resultado.replace(/<script>[\s\S]*?<\/script>/, "");
            }
            return resultado;
        };
        return descriptor;
    };
}
//# sourceMappingURL=escape.js.map