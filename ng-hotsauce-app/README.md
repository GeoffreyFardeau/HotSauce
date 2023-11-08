| Table/Entité      | Action                                      | Méthode HTTP | Route                  |
| ------------------| ------------------------------------------- | ------------ | ---------------------- |
| **USER**          | <span style="color:red">C</span>reate       | POST         | `/api/user`            |
|                   | <span style="color:red">R</span>ead(getOne) | GET          | `/api/user/:id`        |
|                   | <span style="color:red">U</span>pdate       | PATCH        | `/api/user/:id`        |
|                   | <span style="color:red">D</span>elete       | DELETE       | `/api/user/:id`        |
|                   | Liste(getAll)                               | GET          | `/api/users`           |
|-------------------|---------------------------------------------|---------------|-----------------------|
| **EVENT**         | <span style="color:red">C</span>reate       | POST         | `/api/event`           |
|                   | <span style="color:red">R</span>ead(getOne) | GET          | `/api/event/:id`       |
|                   | <span style="color:red">U</span>pdate       | PATCH        | `/api/event/:id`       |
|                   | <span style="color:red">D</span>elete       | DELETE       | `/api/event/:id`       |
|-------------------|---------------------------------------------|--------------|------------------------|
| **EVENTDATES**    | <span style="color:red">C</span>reate       | POST         | `/api/eventdate`       |
|                   | <span style="color:red">R</span>ead(getOne) | GET          | `/api/eventdate/:id`   |
|                   | <span style="color:red">U</span>pdate       | PATCH        | `/api/eventdate/:id`   |
|                   | <span style="color:red">D</span>elete       | DELETE       | `/api/eventdate/:id`   |
|                   | Liste(getAll)                               | GET          | `/api/eventsdates`     |
|-------------------|---------------------------------------------|--------------|------------------------|
| **DATE**          | <span style="color:red">C</span>reate       | POST         | `/api/date`            |
|                   | <span style="color:red">R</span>ead(getOne) | GET          | `/api/date/:id`        |
|                   | <span style="color:red">U</span>pdate       | PATCH        | `/api/date/:id`        |
|                   | <span style="color:red">D</span>elete       | DELETE       | `/api/date/:id`        |
|                   | Liste(getAll)                               | GET          | `/api/dates`           |
|-------------------|---------------------------------------------|--------------|------------------------|
| **USERCHOICE**    | <span style="color:red">C</span>reate       | POST         | `/api/choice`          |
|                   | <span style="color:red">R</span>ead(getOne) | GET          | `/api/choice/:id`      |
|                   | <span style="color:red">U</span>pdate       | PATCH        | `/api/choice/:id`      |
|                   | <span style="color:red">D</span>elete       | DELETE       | `/api/choice/:id`      |
|                   | Liste(getAll)                               | GET          | `/api/choices`         |
|-------------------|---------------------------------------------|--------------|------------------------|
| **USER_HAS_EVENT**| <span style="color:red">C</span>reate       | POST         | `/api/verifyAccess`    |
|                   | <span style="color:red">R</span>ead(getOne) | POST         | `/api/verifyPassword`  |
|                   | <span style="color:red">R</span>ead(getOne) | GET          | `/api/eventUser/:id`   |
|                   | Liste(getAll)                               | GET          | `/api/eventsUser`      |
|-------------------|---------------------------------------------|--------------|------------------------|