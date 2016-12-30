(function (global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      "target": "es5",
      "module": "commonjs",
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      app: 'app',
      'ts':                        'npm:plugin-typescript@4.0.10/lib/plugin.js',
      'typescript':                'npm:typescript@2.0.3/lib/typescript.js',
    },
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      }
    }
  });
})(this);
