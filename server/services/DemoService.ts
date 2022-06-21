// public async getAllTodos(_: Request, res: Response): Promise<void> {
//     const todosResponse = await this.demoService.getAllTodos();

//     todosResponse.match<void>(
//       (value) => {
//         res.status(200).send(value);
//       },
//       (_) => {
//         res.status(502).send(MicroserviceDemoError.COULD_NOT_GET_TODOS);
//       }
//     );
//   }
