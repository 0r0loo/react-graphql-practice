import { v4 } from 'uuid';
import { readDB, writeDB } from '../dbController.js';

const getMsgs = () => readDB('messages');
const setMsgs = (data) => writeDB('messages', data);
const messagesRoute = [
  {
    method: 'get',
    route: '/messages',
    handler: (req, res) => {
      const msgs = getMsgs();
      res.send(msgs);
    },
  },
  {
    method: 'get',
    route: '/messages/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const msg = msgs.find((m) => m.id === id);
        if (!msg) throw Error('not found');
        res.send(msg);
      } catch (error) {
        console.error(error);
      }
    },
  },
  {
    method: 'post',
    route: '/messages',
    handler: ({ body }, res) => {
      const msgs = getMsgs();
      const newMsg = {
        id: v4(),
        text: body.text,
        userId: body.userId,
        timestamp: Date.now(),
      };

      msgs.unshift(newMsg);
      setMsgs(msgs);
      res.send(newMsg);
    },
  },
  {
    method: 'put',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) throw '메시지가 없습니다.';
        if (msgs[targetIndex].userId !== body.userId)
          throw '사용자가 없습니다.';

        const newMsg = { ...msgs[targetIndex], text: body.text };
        msgs.splice(targetIndex, 1, newMsg);
        setMsgs(msgs);
        res.send(newMsg);
      } catch (error) {
        console.error(error);
        res.send(500).send({ error });
      }
    },
  },
  {
    method: 'delete',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const msgs = getMsgs();
        const targetIndex = msgs.findIndex((msg) => msg.id === id);
        if (targetIndex < 0) throw '메시지가 없습니다.';
        if (msgs[targetIndex].userId !== body.userId)
          throw '사용자가 없습니다.';
        msgs.splice(targetIndex, 1);
        setMsgs(msgs);
        res.send(id);
      } catch (error) {
        console.error(error);
        res.send(500).send({ error });
      }
    },
  },
];

export default messagesRoute;
