to start app you need to

0. add .envfile with MONGODB_URL and RMQ_URL
1. npm install
2. npm run start
3. npm run listen



endpoints:
  1. http://localhost:3000/universities ~ Post
  3. http://localhost:3000/universities/:(name or id) ~ Get
  4. http://localhost:3000/universities/:(name or id) ~ Patch
      {
        name?: string;
        image?: string;
        Description?: string;
        country?: string;
      }
  4. http://localhost:3000/universities/:(name or id) ~ Delete
  5. http://localhost:3000 ~ event name: universities ~ WS
       type Sort = {
          name?: number
          created_date?: number
       }

      type Filter = {
        name?: string
        created_by?: string
        created_date?: string
        updated_by?: string
      }

      MessageBody = {
        filter?: Filter[]
        sort?: Sort
        limit?: number
        page?: number
      }
      

service is also connected to rabitMQ. 
On each deleted/updated university we send event to rabitMQ exchange which is binded to 2 queues one for deleted and one for updated.
In the same service we have set up comsumer of those 2 queues (BE TASK/src/universities/universities.service.ts) which logs data of an update/delete inside of DB 
     


