import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { NavigateFunction, useNavigate } from 'react-router';
import { TModalEditValues } from '../components/Schema/schema';

export interface Reviews {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}

export interface Movie {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
  reviews?: Reviews[];
}

export interface IUser {
  email: string;
  name: string;
  id: number;
}

interface IdMovie{
  id:number;
}

interface IContextApi {
  movies: Movie[];
  notifyError: (message: string) => void; 
  notifySucess: (message: string) => void;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setMovieId:React.Dispatch<React.SetStateAction<IdMovie | number>>;
  movieId: IdMovie | number;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalAvalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalAvalOpen: boolean;
  navigate: NavigateFunction;
  logOut: () => void;
  userReview:  Reviews[] | null;
  setUserReview: React.Dispatch<React.SetStateAction<Reviews[] | null>>;
  usersList: IUser[] | undefined;
  modalEdithIsOpen: boolean;
  setModalEdithIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editReview: (formData: TModalEditValues, id: number) => Promise<void>;
  deleteReview: (id:number) => Promise<void>;
}
interface IChildren{
  children: ReactNode;
}

export const  ContextApi = createContext({} as IContextApi);

export const MoviesProvider = ({ children }:  IChildren) => {
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [user, setUser] = useState<IUser | null>(null)
  const [movieId, setMovieId] = useState<IdMovie | number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalAvalOpen, setIsModalAvalOpen] = useState(false)
  const [userReview, setUserReview ] = useState<Reviews[] | null>(null)
  const [usersList, setUsersList] = useState<IUser[] | undefined>() 
  const [modalEdithIsOpen, setModalEdithIsOpen] = useState(false)

  const navigate = useNavigate()
  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get<Movie[]>("/movies")
      setMovies(response.data)
    }
    const UserId = localStorage.getItem("@UserId")
    if(UserId) {
      const getUser = async () => {
        const response = await api.get(`/users/${UserId}`)
        setUser(response.data)

      }
      getUser()
    }

    const getUsers = async () => {
      try {
          const { data } = await api.get(`/users`) 
          if (data.length > 0) {
            setUsersList(data)
          }    
      }catch (error) {
      }
    }

    getUsers()
    getMovies()
   
  }, [])

  const notifyError = (message: string) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  }
  const notifySucess = (message: string) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  
 
  const logOut = () => {
    localStorage.removeItem("@TokenKenzieMoveis")
    localStorage.removeItem("@UserId")
    setIsLoading(false)
    setUser(null)
    navigate("/")
  }

  const editReview = async (formData:TModalEditValues, id:number) => {
    const dataReview = {
        movieId: movieId,
        userId: Number(user?.id),
        score: Number(formData.score),
        description: formData.description,
    }

    const token = localStorage.getItem("@TokenKenzieMoveis")

    try { 
          const { data } = await api.put(`/reviews/${id}`, dataReview, {
              headers: {
                  Authorization: `Bearer ${token}`
              }           
          })
          notifySucess("Avalição editada com sucesso")
          if (userReview !== null) {
            setUserReview((userReview) =>
              userReview!.map((review) => (review.id === id ? data : review))
            )
          }
          }catch (error) {
              notifyError("algo deu errado")
          }   
    }  

  const deleteReview = async (id:number) =>{
    const token = localStorage.getItem("@TokenKenzieMoveis")

    try {
           await api.delete(`/reviews/${id}`, {
              headers: {
                  Authorization: `Bearer ${token}`
              }           
          })
          notifySucess("Avalição excluída com sucesso")
          setTimeout(() => {
            location.reload()
          }, 1500)
          }catch (error) {
              notifyError("algo deu errado")
          }   
    }    
  
  return (
    <ContextApi.Provider value={{ movies, notifyError, notifySucess, user, setUser, isLoading, setIsLoading, navigate, setMovieId , movieId, logOut, isModalAvalOpen, setIsModalAvalOpen, userReview, setUserReview, usersList, modalEdithIsOpen, setModalEdithIsOpen, editReview, deleteReview}}>
      {children}
    </ContextApi.Provider>
  );
}