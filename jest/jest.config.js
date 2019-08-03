module.exports = {
    browser: true,
    rootDir: '..',
    roots: ['src'],
    setupFiles: [require.resolve('regenerator-runtime/runtime')],
    transform: { '^.+\\.jsx?$': './jest/jest.preprocess.js' },
};
