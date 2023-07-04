declare module '@ioc:Adonis/Lucid/Database' {
  interface DatabaseQueryBuilderContract<Result extends any[]> {
      get(): Promise<Result>;
      getCount(): Promise<BigInt>
    }
  }
  