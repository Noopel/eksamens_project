import { useToursQuery, TourData } from "@/hooks/queries/useToursQuery";
import React, { useState } from "react";
import Error from "../Error";
import Loader from "../Loader";
import Modal from "../ui/Modal";
import useRequestData from "@/hooks/useRequestData";
import TureAdminForm from "./TureAdminForm";

const TureList = () => {
  const { data, isError, isLoading, refetch } = useToursQuery();
  const { makeRequest: makeDeleteRequest, data: deleteData, isError: isDeleteError } = useRequestData();
  const { makeRequest: makeEditRequest, data: editData, isError: isEditError } = useRequestData();
  const [currentTour, setCurrentTour] = useState<null | TourData>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  function handleEdit(formData: FormData) {
    if (!currentTour) return;

    makeEditRequest(`http://localhost:4444/tours/admin/${currentTour._id}`, "PUT", undefined, formData);
    setCurrentTour(null)
    setShowEditModal(false)
    refetch()
  }

  function handleDelete() {
    if (!currentTour) return;
    makeDeleteRequest(`http://localhost:4444/tours/admin/${currentTour._id}`, "DELETE");
    setCurrentTour(null);
    setShowDeleteModal(false);
    refetch()
  }

  return (
    <article className="bg-neutral-300 w-[80%] mx-auto mt-12 px-3 py-1 flex flex-col">
      {showDeleteModal && currentTour && (
        <Modal>
          <section onClick={() => setShowDeleteModal(false)} className="w-full h-full flex justify-center items-center bg-black/70">
            <div className="bg-fullwhite h-32 w-80 flex justify-center items-center gap-4">
              <button className="bg-blue-500 p-4 px-8" onClick={() => handleDelete()}>
                Confirm
              </button>
              <button
                className="bg-red-500 p-4 px-8"
                onClick={() => {
                  setCurrentTour(null);
                  setShowDeleteModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </section>
        </Modal>
      )}
      {showEditModal && currentTour && (
        <Modal>
          <section onClick={() => setShowEditModal(false)} className="w-full h-full flex justify-center items-center bg-black/70">
            <div className="bg-fullwhite h-[800px] w-[800px] flex justify-center items-center gap-4">
              <TureAdminForm
                onSubmit={handleEdit}
                defaultValues={{
                  content: currentTour.content,
                  destination: currentTour.destination,
                  distance: currentTour.distance,
                  price: currentTour.price,
                  rating: currentTour.rating,
                  spacelaunch: currentTour.spacelaunch,
                  title: currentTour.title,
                  traveltime: currentTour.traveltime,
                }}
              />
            </div>
          </section>
        </Modal>
      )}
      {isError && !isLoading && <Error />}
      {isLoading && <Loader />}

      {data &&
        data.map((tourData) => (
          <section key={tourData._id} className="flex justify-between my-2 bg-lightseagreen/80 py-2 px-2">
            <div className="relative w-full pt-4 flex flex-wrap gap-8">
              <p className="absolute top-0 left- w-full opacity-75 text-sm">{`id: ${tourData._id}`}</p>
              <p>{`Titel: ${tourData.title}`}</p>
              <p>{`Destination: ${tourData.destination}`}</p>
              <p>{`Afstand: ${tourData.distance}`}</p>
              <p>{`Affyringsdag: ${new Date(tourData.spacelaunch).toLocaleDateString()}`}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="p-4 bg-yellow-500/80 hover:bg-yellow-500"
                onClick={() => {
                  setCurrentTour(tourData);
                  setShowEditModal(true);
                }}
              >
                Rediger
              </button>
              <button
                className="p-4 bg-red-500/80 hover:bg-red-500"
                onClick={() => {
                  setCurrentTour(tourData);
                  setShowDeleteModal(true);
                }}
              >
                Slet
              </button>
            </div>
          </section>
        ))}
    </article>
  );
};

export default TureList;
