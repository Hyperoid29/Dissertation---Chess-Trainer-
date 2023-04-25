import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // import Link component from React Router
import './CreateNewPost.css';
import './ForumPage.css';
import './ForumPageSub.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import bin from '../../assets/bin.png';



import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhdrxhh2mCZwhF7UCGlCN2q7S4zxXr7I8",
    authDomain: "chess-trainer-beaa7.firebaseapp.com",
    projectId: "chess-trainer-beaa7",
    storageBucket: "chess-trainer-beaa7.appspot.com",
    messagingSenderId: "762648153782",
    appId: "1:762648153782:web:ac0992232fd8089e716017",
    measurementId: "G-PXLYD631JD"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



export default function ForumPageSub() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [image, setImage] = useState(null);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        // fetch the discussion post from Firestore
        const unsubscribe = db.collection('posts').doc(id)
            .onSnapshot((doc) => {
                const data = doc.data();
                setTitle(data.title);
                setContent(data.content);
                setReplies(data.replies); // set the replies state array with the replies from Firestore

                // store the replies data in local storage
                localStorage.setItem('replies', JSON.stringify(data.replies));
            });

        return unsubscribe;
    }, [id]);



    const handleReplyClick = () => {
        setShowReplyForm(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newReply = {
            content: replyContent.replace(/<p>/g, '').replace(/<\/p>/g, ''), // remove the <p> tags
            image: image,
            discussionId: id,
        };
        try {
            // Ensure that replies is an array before spreading it into a new array
            const updatedReplies = Array.isArray(replies) ? [...replies, newReply] : [newReply];
            await db.collection('posts').doc(id).update({
                replies: updatedReplies
            });
            setReplies(updatedReplies);
            setShowReplyForm(false);
            setReplyContent('');
            setImage(null);
        } catch (error) {
            console.error("Error adding reply: ", error);
        }
    };

    const modules = {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" },],
            ["link", "image", "video"],
            ["clean"],
        ],
        clipboard: {
            matchVisual: false,
        },
    };





    const formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video",];

    const quillRef = React.useRef();


    const handleDelete = async (reply) => {
        const index = replies.indexOf(reply);
        if (index > -1) {
            const updatedReplies = [...replies];
            updatedReplies.splice(index, 1);
            setReplies(updatedReplies);
            try {
                await db.collection('posts').doc(id).update({
                    replies: updatedReplies,
                });
            } catch (error) {
                console.error("Error deleting reply: ", error);
            }
        }
    };

    return (
        <div className="forum-container">
            <div className={`forum-sub-container ${showReplyForm ? "enlarge" : ""}`}>
                <h1 className="topic-container-forum">
                    {title}
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowReplyForm(!showReplyForm)}
                    >
                        Reply
                    </button>
                </h1>
                {showReplyForm && (
                    <div className={`form-control`}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <ReactQuill
                                    value={replyContent}
                                    onChange={setReplyContent}
                                    modules={modules}
                                    formats={formats}
                                    ref={quillRef}
                                />

                            </div>
                            <div className="submit-button">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <div className="replies-container">
                {Array.isArray(replies) && replies.map((reply, index) => (
                    <div key={index} className="reply-container">
                        <div className="reply-content" dangerouslySetInnerHTML={{ __html: reply.content }} />
                        {reply.image && (
                            <img className="reply-image" src={reply.image} alt="reply" />
                        )}
                        <button className="delete-button" onClick={() => handleDelete(reply)}>
                            <img className="bin-icon" src={bin} alt="bin icon" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}