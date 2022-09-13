import { isFinPath } from "../../utils/videomessage.utils";
import Service from "../Service";

const getVideoMessage = function (user_id) {
  const type = isFinPath() ? "fin_path" : "fin_link";
  const url = `getVideoMessagingForUserId`;
  const service = new Service(url);
  const queryParams = [
    {
      key: "tool",
      value: type,
    },
    {
      key: "isDeleted",
      value: false,
    },
    {
      key: "draft",
      value: false,
    },
    {
      key: "status",
      value: "completed",
    },
    {
      key: "sort",
      value: "-createdAt",
    },
    {
      key: "limit",
      value: 1,
    },
    {
      key: "user",
      value: user_id,
    },
  ];
  queryParams.forEach(function ({ key, value }) {
    service.equals(key, value);
  });
  return new Promise(function (resolve, reject) {
    service
      .find()
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getVideoMessage as getVideoMessage };
