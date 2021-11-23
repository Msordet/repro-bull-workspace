# Yarn workspace x @nestjs/bull reproduction repo

## Installation

Run `yarn`.

## Bug

Run `yarn start:dev`.

```log
[Nest] 51896  - 11/22/2021, 7:01:53 PM     LOG [NestFactory] Starting Nest application...
[Nest] 51896  - 11/22/2021, 7:01:53 PM     LOG [InstanceLoader] AppModule dependencies initialized +27ms
[Nest] 51896  - 11/22/2021, 7:01:53 PM     LOG [InstanceLoader] JobModule dependencies initialized +1ms
[Nest] 51896  - 11/22/2021, 7:01:53 PM   ERROR [ExceptionHandler] Nest can't resolve dependencies of the BullExplorer (?, DiscoveryService, BullMetadataAccessor, MetadataScanner). Please make sure that the argument ModuleRef at index [0] is available in the BullModule context.

Potential solutions:
- If ModuleRef is a provider, is it part of the current BullModule?
- If ModuleRef is exported from a separate @Module, is that module imported within BullModule?
  @Module({
    imports: [ /* the Module containing ModuleRef */ ]
  })
```
