import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useCallback, useState } from "react";

const POINTS_PAGE_QUERY = gql`
  query PointsPage {
    findPointByID(id: 261606955017044499) {
      _id
      name
      pointChanges {
        _id
        amount
        note
      }
    }
  }
`;

const ADD_POINT_CHANGE_MUTATION = gql`
  mutation AddPointChangeMutation($data: PointChangeInput!) {
    createPointChange(data: $data) {
      _id
      amount
      note
    }
  }
`;

const ALL_POINT_CHANGES = gql`
  query AllPointChanges {
    allPointChanges {
      after
      before
      data {
        amount
        note
      }
    }
  }
`;

const PointsPage = () => {
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState(0);
  const { loading, error, data } = useQuery(POINTS_PAGE_QUERY);
  const { data: allPointChangesData } = useQuery<{
    allPointChanges: { data: any[] };
  }>(ALL_POINT_CHANGES);
  const [addPointChange] = useMutation(ADD_POINT_CHANGE_MUTATION);
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      addPointChange({
        variables: {
          data: { amount, note, point: { connect: 261606955017044499 } },
        },
      });
    },
    [amount, note]
  );
  const handleAmountChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(Number(event.target.value));
    },
    []
  );
  const handleNoteChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNote(event.target.value);
    },
    []
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.findPointByID.name}</h1>
      <h2>
        총점:{" "}
        {allPointChangesData?.allPointChanges.data.reduce(
          (prev: any, next: any) => next.amount + prev,
          0
        )}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="amount"
          onChange={handleAmountChange}
          placeholder="점수"
          type="number"
          value={amount}
        />
        <input
          name="note"
          onChange={handleNoteChange}
          placeholder="메모"
          type="text"
          value={note}
        />
        <button type="submit">포인트 추가</button>
      </form>
      <ul>
        {allPointChangesData?.allPointChanges.data.map((e: any) => (
          <li key={e._id}>
            {e.amount}, {e.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsPage;
